import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
  data: [
    {
      attributes: {
        Title: string;
        Description: string;
        ProductImage: {
          data: {
            attributes: {
              formats: {
                small: {
                  url: string;
                };
              };
            };
          };
        };
      };
    }
  ];
}

@Component({
  selector: 'ns-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  myTitle = 'Some text';
  products: any[] = [];
  url = 'https://cms.alexsumina.me';

  constructor(private http: HttpClient) {}

  getProductDetails(id: number) {
    console.log('ID', id);
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.http
      .get<any>(this.url + '/api/products?populate=*')
      .subscribe((res) => {
        console.log('This is res' + res);
        this.products = res.data;
        console.log('This is this.products' + this.products);
      });
  }
}

//   dummyArray: any[] = [
//     {
//       weather: 'Sunny',
//       temp: 20,
//       image:
//         'https://cc-prod.scene7.com/is/image/CCProdAuthor/sun-illustration_P3a_690x724?$pjpeg$&jpegSize=200&wid=690',
//       description:
//         '"Let me brighten up your day, and maybe melt that ice cream cone you`re trying to eat."',
//     },

//     {
//       weather: 'Cloudy',
//       temp: 17,
//       image:
//         'https://mymodernmet.com/wp/wp-content/uploads/2022/11/chris-judge-a-daily-cloud-art-12.jpg',
//       description:
//         'Clouds are nature`s fluffy, ever-changing works of art. They`re like the divas of the sky, strutting their stuff in a range of shapes and sizes.',
//     },
//   ];
// }
