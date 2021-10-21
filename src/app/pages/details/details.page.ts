import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private product: Product = {};
  private loading: any;
  private productId: string = null;
  private productSubscription: Subscription;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
    private navCtrl: NavController,
  ) {
    this.productId = this.activeRoute.snapshot.params['id'];

    if (this.productId) this.loadProduct();
  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.productSubscription) this.productSubscription.unsubscribe();
  }

  loadProduct() {
    this.productSubscription = this.productService.getProduct(this.productId).subscribe(data => {
      this.product = data;
    });
  }

  async saveProduct() {
    await this.presentLoading();

    this.product.userId = (await this.authService.getAuth().currentUser).uid;

    if (this.productId) {
      try {
        await this.productService.updateProduct(this.productId, this.product);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/home');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }

    } else {
      this.product.createdAt = new Date().getTime();

      try {
        await this.productService.addProduct(this.product);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/footer/home');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, Aguarde...', });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}
