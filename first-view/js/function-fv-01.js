
//////////////////////////////////
//ファーストビュー01
//////////////////////////////////

window.addEventListener('load', init);
function init() {
    // カメラの回転これがあるとスマホに対応できない
    let rot = 0;
  // レンダラー
  const renderer = new THREE.WebGLRenderer({
 
  // const renderer = new THREE.CanvasRenderer({
    canvas: document.querySelector('#header__mv'),
    antialias: true,
    alpha: true
  });
  // シーン
  const scene = new THREE.Scene();
  // カメラ
  const camera = new THREE.PerspectiveCamera(45, 1.0);
  camera.position.set(0, 0, +1000);
    // ライト
  const light = new THREE.DirectionalLight(0xffffff, 0.7);
    light.position.set(1, 1, 1);
  // const light2 = new THREE.DirectionalLight(0xffffff, 0.7);
  //   light.position.set(1, 1, -120);
  const light2 = new THREE.HemisphereLight(0x888888, 0x0000FF, 0.5);
    light.position.set(1, 1, 1);

    
    // ここからパーティクル
    StarField();
    function StarField(){
    const geometry = new THREE.Geometry();

        const SIZE = 1000;
        const LENGTH = 5000;
        // const LENGTH = 1000;
        for (let i = 0; i < LENGTH; i++){
            geometry.vertices.push(
            new THREE.Vector3(
                SIZE * (Math.random() - 1),
                SIZE * (Math.random() - 0.5),
                SIZE * (Math.random() - 0.5)
            )
        );
        }
    const material = new THREE.PointsMaterial({
        size: 5,
        // color: 0xffffff
        color: 0x40e0d0
    });
    const ster = new THREE.Points(geometry, material);
    scene.add(ster);
    }
    // ここまでパーティクル


    // ここからイニシャル
    const geometry = new THREE.BoxGeometry(100, 100, 100);
     // const geometry2 = new THREE.BoxGeometry(100, 100, 100);

    const loader = new THREE.TextureLoader();
    const texture = loader.load('images/k4.jpg');
    // const texture = loader.load('../images/k4.jpg');
    // マテリアルにテクスチャー
    const material = new THREE.MeshStandardMaterial({
    map: texture
    });



    //  const material = new THREE.MeshPhongMaterial({color: 0x40e0d0});
    //  const material = new THREE.MeshLambertMaterial({color: 0x40e0d0});
    //  const material = new THREE.MeshToonMaterial({color: 0x40e0d0});
    //  const material = new THREE.MeshStandardMaterial({color: 0x40e0d0});

    // ここからイニシャルK
    const box1 = new THREE.Mesh(geometry, material);
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
 
  scene.add(box1, box2, box3, box4, box5, box6, box7, box8, box9, box10);
  scene.add(box11, box12, box13, box14, box15, box16, box17, box18, box19, box20);
  
  // scene.add(light);
  scene.add(light, light2);
  // scene.add(light3);

  tick();
  // ループイベント
  
  function tick() {
    
           rot += 1;

        const radian = (rot * Math.PI) / 1200;
 
        camera.position.x = 1200 * Math.sin(radian);
        camera.position.z = 700 * Math.cos(radian);
        camera.position.y = 700 * Math.cos(radian);
        // camera.position.x = 1500 * Math.sin(radian);
        // camera.position.z = 1000 * Math.cos(radian);
        // camera.position.y = 1000 * Math.cos(radian);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        

        // box1.moveX = 2;
        // if( Math.abs( box1.position.x ) > 150 ) box1.moveX *= -1;
        // box1.position.x += box1.moveX;
        // if( Math.abs(box1.position.x) > 100 ) box1.moveX *= -1;
        // box1.rotation.y += 0.005;
        // box2.rotation.y += 0.005;
        // box3.rotation.y += 0.005;
        // box4.rotation.y += 0.005;
        // box5.rotation.y += 0.005;
        // box6.rotation.y += 0.005;
        // box7.rotation.y += 0.005;
        // box8.rotation.y += 0.005;
        // box9.rotation.y += 0.005;
        // box10.rotation.y += 0.005;
        // box1.position.x += 0.5;
       
      
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
