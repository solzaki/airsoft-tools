import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TreeNode } from "primeng/api";
import { Api } from "../api/api";
import { Field } from "../domain/field";
import { map } from "rxjs";
import { convertDynamoDB } from "../util/dynamoDbUtil";
import { groupBy } from "../util/arrayUtil";

@Injectable()
export class TreeNodeService {

    constructor(private http: HttpClient) { }

    /**
     * DBから取得
     * TreeNodeに形式をあわせる
     * @returns Observable<TreeNode[]>
     */
    private getTreeNodesData() {
        return this.http.post(Api.lists, { 'TableName': 'field' }).pipe(
            map((res: any) => {
                const raw: Field[] = res.Items;
                const arr = convertDynamoDB(raw);
                const group = groupBy(arr, 'adress1');

                const node: TreeNode[] = [];

                for (const key in group) {

                    const values = group[key];

                    // 都道府県メニュー作成
                    let index = node.findIndex(val => val.label === key)
                    if (index === -1) {
                        node.push({
                            label: key,
                            data: key,
                            children: []
                        });
                        index = node.length - 1;
                    }

                    // 市区町村＋それ以降
                    for (const item of values) {
                        console.log(item);
                        const child = node[index].children

                        if (child) {
                            // 市メニュー作成
                            let secondIndex = child.findIndex(val => val.label === item.adress2);
                            if (secondIndex === -1) {
                                child.push({
                                    label: item.adress2,
                                    data: key + item.adress2,
                                    children: []
                                });
                                node[index].children = child;
                                secondIndex = child.length - 1;
                            }

                            const sub = child[secondIndex].children;
                            if (sub) {
                                const thirdIndex = sub.findIndex(val => val.label === item.adress3);
                                if (thirdIndex === -1) {
                                    sub.push({
                                        label: item.name,
                                        data: key + item.adress2 + item.adress3,
                                    });
                                }
                            }

                            node[index].children = child;

                        }
                    }
                }

                return node;

            })
        );

    }

    /**
     * メニューデータ取得
     * @returns 
     */
    getTreeNodes() {
        return this.getTreeNodesData();
    }

}




