const TIEMPO_EXPIRACION = 600000;
const URL_BASE_DE_DATOS = 'mongodb://localhost:27017/coderhouse';
const mongoOptions = {useNewUrlParser: true, useUnifiedTopology:true}
const URL_BASE_DE_DATOS_ATLAS = `'mongodb+srv://nahu:<nahuel123>@cluster0.6gkkhal.mongodb.net/test',${mongoOptions}`;
export default  {
	TIEMPO_EXPIRACION,
	URL_BASE_DE_DATOS,
	URL_BASE_DE_DATOS_ATLAS
}
