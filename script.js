
function mostrarCartaDePresentacion(){
    document.getElementById('cartaDePresentacion').style.display = 'block';
    document.getElementById('datosPersonales').style.display = 'none';
    document.getElementById('formacion').style.display = 'none';
    document.getElementById('experienciaLaboral').style.display = 'none';
}

function mostrarDatosPersonales(){
    document.getElementById('cartaDePresentacion').style.display = 'none';
    document.getElementById('datosPersonales').style.display = 'block';
    document.getElementById('formacion').style.display = 'none';
    document.getElementById('experienciaLaboral').style.display = 'none';
}

function mostrarFormacion(){
    document.getElementById('cartaDePresentacion').style.display = 'none';
    document.getElementById('datosPersonales').style.display = 'none';
    document.getElementById('formacion').style.display = 'block';
    document.getElementById('experienciaLaboral').style.display = 'none';
}

function mostrarExperienciaLaboral(){
    document.getElementById('cartaDePresentacion').style.display = 'none';
    document.getElementById('datosPersonales').style.display = 'none';
    document.getElementById('formacion').style.display = 'none';
    document.getElementById('experienciaLaboral').style.display = 'block';
}

function cerrar(){
    document.getElementById('cartaDePresentacion').style.display = 'none';
    document.getElementById('datosPersonales').style.display = 'none';
    document.getElementById('formacion').style.display = 'none';
    document.getElementById('experienciaLaboral').style.display = 'none';
}

