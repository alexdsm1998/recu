document.addEventListener('DOMContentLoaded', () => {

    const botonAnyadir = document.getElementsByName('anyadir')[0];
    botonAnyadir.addEventListener('click', (event) => {
      let cuerpo = document.getElementsByTagName('tbody')[0];
      let valorNombre = document.getElementsByTagName('input')[0].value;
      let valorApellidos = document.getElementsByTagName('input')[1].value;
      let valorFecha = document.getElementsByTagName('input')[2].value;
      let valorLenguaje = document.getElementsByTagName('select')[0].value;
      let valorExperiencia = document.getElementsByTagName('input')[3].value;
      if (validacion() == true) {
      let nuevaFila = document.createElement('tr');
      cuerpo.appendChild(nuevaFila);
      let celdaNombre = document.createElement('td')
      celdaNombre.textContent = valorNombre;
      nuevaFila.appendChild(celdaNombre);
      let celdaApellidos = document.createElement('td')
      celdaApellidos.textContent = valorApellidos;
      nuevaFila.appendChild(celdaApellidos);
      let celdaFecha = document.createElement('td')
      celdaFecha.textContent = valorFecha;
      nuevaFila.appendChild(celdaFecha);
      let celdaLenguaje = document.createElement('td');
      celdaLenguaje.textContent = valorLenguaje;
      nuevaFila.appendChild(celdaLenguaje);
      let celdaExperiencia = document.createElement('td');
      celdaExperiencia.textContent = valorExperiencia;
      nuevaFila.appendChild(celdaExperiencia);
      botonBorrarDatos.disabled = false;
      controlarError();
      }
    })

    function controlarError(){
    let nombreSpan = document.getElementsByTagName('span')[0];
    let apellidosSpan = document.getElementsByTagName('span')[1];
    let fechaSpan = document.getElementsByTagName('span')[2];
    let lenguajeSpan = document.getElementsByTagName('span')[3];
    let anyoSpan = document.getElementsByTagName('span')[4];

    nombreSpan.textContent = ''
    apellidosSpan.textContent = ''
    fechaSpan.textContent = ''
    lenguajeSpan.textContent = ''
    anyoSpan.textContent = ''

    let nombre = document.getElementsByTagName('input')[0];
    let apellidos = document.getElementsByTagName('input')[1];
    let fecha = document.getElementsByTagName('input')[2];
    let experiencia = document.getElementsByTagName('input')[3];

    nombre.style = '1px solid #ced4da';
    apellidos.style = '1px solid #ced4da';
    fecha.style = '1px solid #ced4da';
    experiencia.style = '1px solid #ced4da';
    }

    const botonRestablecer = document.getElementsByName('restablecer')[0];
    botonRestablecer.addEventListener('click', (event) => {
      document.getElementsByClassName('form-group')[0].reset();
      controlarError();
    })

    function confirmar(){
    	if(confirm('¿seguro deseas borrar los datos?'))
    		return true;
    	else
    		return false;
    }

    const botonBorrarDatos = document.getElementsByName('borrar-datos')[0];
    botonBorrarDatos.disabled = true;
    botonBorrarDatos.addEventListener('click', (event) => {
      if (confirmar() == true) {
        let cuerpo = document.getElementsByTagName('tbody')[0];
        let tabla = document.getElementsByTagName('table')[0];
        cuerpo.remove();
        let cuerpoNuevo = document.createElement('tbody');
        tabla.appendChild(cuerpoNuevo);
        botonBorrarDatos.disabled = true;
      }
    })

    function validacion() {
      let valorNombre = document.getElementsByTagName('input')[0].value;
      let valorApellidos = document.getElementsByTagName('input')[1].value;
      let valorFecha = document.getElementsByTagName('input')[2].value;
      let valorExperiencia = document.getElementsByTagName('input')[3].value;
      let experienciaInt = parseInt(valorExperiencia);
    if (valorNombre == '' ) {
      let nombre = document.getElementsByTagName('input')[0]
      nombre.style = 'border:1px solid red;'
      let nombreError = document.getElementById('nombre-error')
      nombreError.textContent = 'el campo nombre no puede estar vacio';
      nombreError.style = 'color: red';
      return false;
    }else if (valorApellidos == '') {
      let apellidos = document.getElementsByTagName('input')[1];
      apellidos.style = 'border:1px solid red;'
      let apellidosError = document.getElementById('apellidos-error')
      apellidosError.textContent = 'el campo apellidos no puede estar vacio';
      apellidosError.style = 'color: red';
      return false;
    }else if (valorFecha.length<1) {
      let fecha = document.getElementsByTagName('input')[2];
      fecha.style = 'border: 1px solid red'
      let fechaError = document.getElementById('fecha-error');
      fechaError.textContent = 'el campo fecha no puede estar vacio'
      fechaError.style = 'color: red';
      return false;
    }else if (isNaN(valorNombre) == false) {
      let nombre = document.getElementsByTagName('input')[0];
      nombre.style = 'border:1px solid red;'
      let nombreError = document.getElementById('nombre-error')
      nombreError.textContent = 'el campo nombre no puede ser un número';
      nombreError.style = 'color: red';
      return false;
    }else if (isNaN(valorApellidos) == false) {
      let apellidos = document.getElementsByTagName('input')[1];
      apellidos.style = 'border:1px solid red;'
      let apellidosError = document.getElementById('apellidos-error');
      apellidosError.textContent = 'el campo apellidos no puede ser un número';
      apellidosError.style = 'color: red';
      return false;
    }else if (experienciaInt<0) {
      let experiencia = document.getElementsByTagName('input')[3];
      experiencia.style = 'border:1px solid red;';
      let experienciaError = document.getElementById('anyos-error');
      experienciaError.textContent = 'los años de experiencia no pueden ser menores a 0'
      experienciaError.style = 'color: red';
      return false;
    }else if (valorExperiencia == '') {
      let experiencia = document.getElementsByTagName('input')[3];
      experiencia.style = 'border:1px solid red;';
      let experienciaError = document.getElementById('anyos-error');
      experienciaError.textContent = 'no puedes dejar el campo vacío'
      experienciaError.style = 'color: red';
      return false;
    }
    return true;
    }

});
