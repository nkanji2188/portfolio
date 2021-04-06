// //////////////////////////  
// ファーストビューアイフォンで出来る表現
// //////////////////////////


window.addEventListener('load', init);
function init() {
  // let rot = 0;
  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#header__mv'),
    antialias: true,
    alpha: true
  });
  // シーンを作成
  const scene = new THREE.Scene();
  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, 1.0);
  // camera.position.set(0, 0, +1350);
  camera.position.set(0, 0, +1000);
const light = new THREE.DirectionalLight(0xffffff, 1);
// const light = new THREE.DirectionalLight(0xffffff, 0.7);
light.position.set(1, 1, 1);

//// ここからイニシャル
  const geometry = new THREE.BoxGeometry(100, 100, 100);
   // const geometry2 = new THREE.BoxGeometry(100, 100, 100);
  const loader = new THREE.TextureLoader();
  const texture = loader.load('images/kn-04.jpg');
  // マテリアルにテクスチャー
  const material = new THREE.MeshPhongMaterial({
  map: texture
  });
  // const material = new THREE.MeshPhongMaterial({color: 0x40e0d0});

// // ここからイニシャルK
scene.add(light);
// scene.add(light2);
  // メッシュを作成
  const box1 = new THREE.Mesh(geometry, material);
  // 3D空間にメッシュを追加
  const box2 = new THREE.Mesh(geometry, material);
      const box3 = new THREE.Mesh(geometry, material);
      const box4 = new THREE.Mesh(geometry, material);
      const box5 = new THREE.Mesh(geometry, material);
      const box6 = new THREE.Mesh(geometry, material);
      const box7 = new THREE.Mesh(geometry, material);
      const box8 = new THREE.Mesh(geometry, material);
      const box9 = new THREE.Mesh(geometry, material);
      const box10 = new THREE.Mesh(geometry, material);
      box1.position.x= -380; box1.position.y= 220;
box2.position.x= -380; box2.position.y = 110;
box3.position.x= -380;
box4.position.x= -380; box4.position.y = -110;
box5.position.x= -380; box5.position.y = -220;
box6.position.x = -50; box6.position.y = 220;
box7.position.x = -160; box7.position.y = 110;
box8.position.x = -270;
box9.position.x = -160; box9.position.y = -110;
box10.position.x = -50; box10.position.y = -220;
        const box11 = new THREE.Mesh(geometry, material);
const box12 = new THREE.Mesh(geometry, material);
const box13 = new THREE.Mesh(geometry, material);
const box14 = new THREE.Mesh(geometry, material);
const box15 = new THREE.Mesh(geometry, material);
const box16 = new THREE.Mesh(geometry, material);
const box17 = new THREE.Mesh(geometry, material);
const box18 = new THREE.Mesh(geometry, material);
const box19 = new THREE.Mesh(geometry, material);
const box20 = new THREE.Mesh(geometry, material);
box11.position.x= 100; box11.position.y= 110;
box12.position.x= 100; 
box13.position.x= 100; box13.position.y= -110;
box14.position.x= 100; box14.position.y = -220;
box15.position.x= 210; 
box16.position.x = 320; box16.position.y = -110;
box17.position.x = 430; box17.position.y = 110;
box18.position.x = 430;
box19.position.x = 430; box19.position.y = -110;
box20.position.x = 430; box20.position.y = -220;


const wrap = new THREE.Object3D(); 
wrap.add(box1, box2, box3, box4, box5, box6, box7, box8, box9, box10);
wrap.add(box11, box12, box13, box14, box15, box16, box17, box18, box19, box20);

    scene.add(wrap); 
  tick();
  // 毎フレーム時に実行されるループイベント
  function tick() {
    wrap.rotation.y += 0.005;
    wrap.rotation.x += 0.001;
    wrap.rotation.z += 0.001;
 
    // レンダリング
    renderer.render(scene, camera);
    renderer.setClearColor(0xffffff, 0);
    requestAnimationFrame(tick);
  }
    // 初期化
onResize();
// リサイズイベント発生時に実行
window.addEventListener('resize', onResize);
function onResize() {
// サイズを取得
const width = window.innerWidth;
const height = window.innerHeight;
// const height = window.innerHeight += 300;
// const height = 1080;
// レンダラーのサイズ
// renderer.setPixelRatio(1);
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(width, height);
renderer.setSize(width, height);
// カメラのアスペクト比
camera.aspect = width / height;
// camera.aspect = width / height;
camera.updateProjectionMatrix();
}

}