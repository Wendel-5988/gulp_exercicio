//crie variaveis das tarefas instaladas.
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate =  require('gulp-obfuscate');
const imagemin =  require('gulp-imagemin');

//crie função para compilar o sass. Consiste em transformar arquivos scss em css basicamente.
function compilaSass(){
    return gulp.src('./source/styles/main.scss') //vai buscar essa pasta nos seus arquivos.
    .pipe(sourcemaps.init()) //tarefa que endereça o arquivo bruto (sass) e não o compilado (css) na inspeção.
    .pipe(sass({
        outputStyle: 'compressed'  //funçao para comprimir o arquivo css.
    }))
    .pipe(sourcemaps.write('./maps')) //indica o arquivo onde o resultado de sourcemaps deverá ser aberto.
    .pipe(gulp.dest('./build/styles')); //destino da compilação do sass.
}

//crie uma funcão para comprimir o codigo js.
function comprimeJavascript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify()) //comprime todo seu codigo js.
    .pipe(obfuscate()) //ofusca seu código js, tornando ele praticamente ilegível.
    .pipe(gulp.dest('./build/scripts'));
}

//crie uma função para comprimir as imagens do seu projeto.
function comprimeImagem() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

//exporte as funções através do terminal.
exports.default = function() {
    //o gulp vai observar os arquivos endereçados, sem ignorar as alterações iniciais, e caso tenha alguma modificação, ele irá executar as funcões, q sao de compilar e comprimir seus respectivos arquivos.
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass)); 
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavascript));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagem));
}

exports.compsass = comprimeImagem