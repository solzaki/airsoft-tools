import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MenuItem, TreeNode } from 'primeng/api';
import { TreeModule, TreeNodeSelectEvent } from 'primeng/tree';
import { GoogleMap, GoogleMapsModule, MapGeocoder, MapInfoWindow, MapMarker } from "@angular/google-maps";
import { TreeNodeService } from '../../../service/treenode.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
	selector: 'app-map',
	standalone: true,
	imports: [HttpClientModule, TreeModule, GoogleMapsModule, MapInfoWindow, MapMarker],
	templateUrl: './map.component.html',
	styleUrl: './map.component.css',
	providers: [TreeNodeService, MapGeocoder]
})
export class MapComponent implements OnInit {

	@ViewChild(GoogleMap, { static: false }) map: GoogleMap | undefined;
	@ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
	@ViewChild(MapMarker) maker!: MapMarker;
	geocoder = inject(MapGeocoder);

	markerOptions: google.maps.MarkerOptions = { draggable: false };
	markerPositions: google.maps.LatLngLiteral[] = [];


	items: MenuItem[] | undefined;
	nodeService = inject(TreeNodeService);
	adresses!: TreeNode[];




	zoom = 7;
	center: google.maps.LatLngLiteral = {
		lat: 35.68987274169922,
		lng: 139.69210815429688
	};

	ngOnInit(): void {
		this.nodeService.getTreeNodes().subscribe(adress => {
			console.log(adress);
			this.adresses = adress;
		});
	}

	/**
	 * メニューアイテムからマップの遷移
	 * @param event TreeNodeSelectEvent
	 */
	onSelectMenu(event: TreeNodeSelectEvent) {

		const item = event.node;

		if (item.children) {
			item.expanded = !item.expanded;
		}

		// 市区町村によるズーム値
		const count = this.itemCount(item, 0);
		this.map?.googleMap?.setZoom(this.zoom + count);

		// マップ遷移
		this.geocoder.geocode({
			address: item.label
		}).subscribe((response) => {
			this.map?.googleMap?.setCenter(response.results[0].geometry.location);
		});
	}

	/**
	 * ズーム倍率の決定
	 * @param item TreeNode
	 * @param count ズーム倍率の初期値
	 * @returns 
	 */
	private itemCount(item: TreeNode, count: number): number {
		if (!item.parent) {
			return count;
		}
		return this.itemCount(item.parent, count+3);
	}

}
