import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as THREE from 'three';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('Obj') canvasEl: ElementRef;
  
  public element : any;
  public scene;
  public camera;
  public renderer;
  public fish1;
  public fish2;
  public fish3;
  public fish4;
  public fish5;
  public fish6;
  public fishf;

  constructor(public navCtrl: NavController) {
    
      }
  ionViewDidLoad(){
      this.initialiseWebGL();
      this.animation();
   }
   initialiseWebGL(){
      this.element 			= this.canvasEl.nativeElement;
      this.scene 				= new THREE.Scene();
      this.camera 				= new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      this.camera.position.z 	= 5;
   	  
      
      //this.geometry 			= new THREE.BoxGeometry( 1, 1, 1 );
      var pattern1			= new THREE.PlaneGeometry( 1, 1, 1 );
      var f1 = THREE.ImageUtils.loadTexture("../assets/imgs/fish.png");
      var map1 = new THREE.MeshBasicMaterial( { map: f1 } );
      this.fish1	 = new THREE.Mesh(pattern1, map1);
      this.fish1.position.x=-1;
      this.fish1.position.y=1;
      this.scene.add(this.fish1);

      var pattern2 = new THREE.PlaneGeometry( 1 , 1 ,1 );
      var f2 = THREE.ImageUtils.loadTexture("../assets/imgs/fish1.png");
      var map2 = new THREE.MeshBasicMaterial( { map: f2} );
      this.fish2 = new THREE.Mesh(pattern2, map2);
      this.fish2.position.x= -1.5;
      this.fish2.position.y=-1;
      this.scene.add(this.fish2);
      
      var pattern3 = new THREE.PlaneGeometry( 1 , 1 ,1 );
      var f3 = THREE.ImageUtils.loadTexture("../assets/imgs/fish3.png");
      var map3 = new THREE.MeshBasicMaterial( { map: f3} );
      this.fish3 = new THREE.Mesh(pattern3, map3);
      this.fish3.position.x=1.5;
      this.fish3.position.y=2.5;
      this.scene.add(this.fish3);


      var pattern5 = new THREE.PlaneGeometry( 1 , 1 ,1 );
      var f5 = THREE.ImageUtils.loadTexture("../assets/imgs/fish5.png");
      var map5 = new THREE.MeshBasicMaterial( { map: f5} );
      this.fish5 = new THREE.Mesh(pattern5, map5);
      this.fish5.position.x=-1;
      this.fish5.position.y=1;
      this.scene.add(this.fish5);

      var pattern6 = new THREE.BoxGeometry( 1 , 1 ,1 );
      var f6 = THREE.ImageUtils.loadTexture("../assets/imgs/fish6.png");
      var map6 = new THREE.MeshBasicMaterial( { map: f6} );
      this.fish6 = new THREE.Mesh(pattern6, map6);
      //this.fish6.position.x=10;
      //this.fish6.position.y=-1;
      this.scene.add(this.fish6);

      //fish flock
      var patternf = new THREE.PlaneGeometry( 1 , 1 , 1 );
      var ffg = THREE.ImageUtils.loadTexture("../assets/imgs/ffg.png");
      var mapf = new THREE.MeshBasicMaterial( { map: ffg} );
      this.fishf = new THREE.Mesh(patternf, mapf);
      this.fishf.position.x=1;
      this.scene.add(this.fishf);


      this.renderer 			= new THREE.WebGLRenderer({ alpha: true });
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.element.appendChild( this.renderer.domElement );
   }
   animation(){
   
   	  requestAnimationFrame(() =>{
   	     this.animation();
   	  });   
      this.fish1.translateX(0.015);
      this.fish1.translateY(-0.015);
      
      this.fish2.translateY(0.004);
      //this.fish2.rotation.z +=(0.04);
      
      this.fish3.translateY(-0.004); 

      this.fish5.translateX(0.015);

      this.fish6.translateX(0.015);
      this.fish6.translateY(0.004);
      this.fish6.rotation.y +=(0.04);
      

      this.fishf.translateY(0.012);
      this.fishf.rotation.z +=(0.012);

   	  this.renderer.render(this.scene, this.camera);
   };
}
