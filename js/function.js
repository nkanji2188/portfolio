window.addEventListener('load', init);
function init() {
    let rot = 0;
  // レンダラー
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#header__mv'),
    antialias: true
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
        color: 0x40e0d0
    });
    const ster = new THREE.Points(geometry, material);
    // scene.add(ster);
    }
    // ここまでパーティクル


    // ここからイニシャル
    const geometry = new THREE.BoxGeometry(100, 100, 100);
     // const geometry2 = new THREE.BoxGeometry(100, 100, 100);
    const loader = new THREE.TextureLoader();
    const texture = loader.load('../images/k4.png');
    // マテリアルにテクスチャー
    const material = new THREE.MeshStandardMaterial({
    map: texture
    });
     // const material = new THREE.MeshToonMaterial({color: 0x999999});

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
  box1.position.y= 220;
  box2.position.y = 110;
  box4.position.y = -110;
  box5.position.y = -220;
  box6.position.y = 220;
  box6.position.x = 330;
  box7.position.y = 110;
  box7.position.x = 220;
  box8.position.x = 110;
  box9.position.y = -110;
  box9.position.x = 220;
  box10.position.x = 330;
  box10.position.y = -220;
 
  // scene.add(box1, box2, box3, box4, box5);
  // scene.add(box6);
  // scene.add(box7);
  // scene.add(box8);
  // scene.add(box9);
  // scene.add(box10);
  scene.add(light, light2);
  // scene.add(light3);

  tick();
  // ループイベント
  
  function tick() {
           rot += 1;

        const radian = (rot * Math.PI) / 1200;
 
        camera.position.x = 1500 * Math.sin(radian);
        camera.position.z = 1000 * Math.cos(radian);
        camera.position.y = 1000 * Math.cos(radian);
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        // box1.moveX = 2;
        // if( Math.abs( box1.position.x ) > 150 ) box1.moveX *= -1;
        // box1.position.x += box1.moveX;
        // if( Math.abs(box1.position.x) > 100 ) box1.moveX *= -1;
        // box1.rotation.y += 0.005;
        // box1.position.x += 0.5;
      
        renderer.render(scene, camera);
        renderer.setClearColor(0xffffff, 1);
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
    renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize(width, height);
    renderer.setSize(width, height);
    // カメラのアスペクト比
    camera.aspect = width / height;
    // camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}


