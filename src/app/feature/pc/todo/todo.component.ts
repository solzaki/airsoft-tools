import { Component, OnInit, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { OrderListModule } from 'primeng/orderlist';
import { SkeletonModule } from 'primeng/skeleton';

import { Product } from '../../../domain/product';
import { ProductService } from '../../../service/productservice';

interface Timing {
	name: string;
	code: string;
}

const importsList = [
	CardModule, InputTextModule, InputGroupModule, InputGroupAddonModule, DropdownModule, ButtonModule, OrderListModule, SkeletonModule
]

const generateRandomString = (charCount = 7): string => {
	const str = Math.random().toString(36).substring(2).slice(-charCount)
	return str.length < charCount ? str + 'a'.repeat(charCount - str.length) : str
}

@Component({
	selector: 'app-todo',
	standalone: true,
	imports: importsList,
	templateUrl: './todo.component.html',
	styleUrl: './todo.component.scss',
	providers: [ProductService]
})
export class TodoComponent implements OnInit {

	timing: Timing[] | undefined;
	selectedCity: Timing | undefined;
	products!: Product[];
	productService = inject(ProductService);

	ngOnInit(): void {

		// TODO: DBから取得するよう変更
		this.timing = [
			{ name: '当日', code: 'NY' },
			{ name: '前日', code: 'RM' },
			{ name: '常時', code: 'LDN' },
			{ name: '不要', code: 'IST' }
		];

		this.productService.getProducts().then((cars) => (this.products = cars));
	}

	getSeverity(status: string) {
		switch (status) {
			case 'INSTOCK':
				return 'success';
			case 'LOWSTOCK':
				return 'warning';
			case 'OUTOFSTOCK':
			default:
				return 'danger'; 
		}
	}

	onSubmitAdd() {
		this.productService.addProducts({
			id: '',
			code: generateRandomString(),
			name: 'test',
			description: 'Product Description',
			image: 'bamboo-watch.jpg',
			price: 65,
			category: 'Accessories',
			quantity: 24,
			inventoryStatus: 'INSTOCK',
			rating: 5			
		});

		this.productService.getProducts().then((cars) => (this.products = cars));
	}

	

}
