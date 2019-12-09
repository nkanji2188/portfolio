const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

// style.scssの監視タスクを作成する
gulp.task("default", function() {
  // ★ style.scssファイルを監視
  return gulp.watch("./sass/**/*.scss", function() {
    // style.scssの更新があった場合の処理

    // style.scssファイルを取得
    return (
      gulp
        .src("./sass/**/*.scss")
        // Sassのコンパイルを実行
        .pipe(
          sass({
            outputStyle: "compressed"
          })
            // Sassのコンパイルエラーを表示
            // (これがないと自動的に止まってしまう)
            .on("error", sass.logError)
        )
        // cssフォルダー以下に保存
        .pipe(gulp.dest("./css"))
    );
  });
});
// var gulp = require('gulp'),
    pug  = require('gulp-pug');
 
gulp.task('pug', function() {
  gulp.src(
    ['./pug/**/*.pug', '!./pug/**/_*.pug']
  )
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./develop'))
});