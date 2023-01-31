# Sistema Colaboradores
**URL**: https://kvel83.github.io/SistemaColaboradores/

<h2>Descripción</h2>
<p>Proyecto realizado para la administración de colaboradores, se despliega la información básica en una tabla donde se pueden actualizar los datos de cada uno o eliminar al colaborador. Tambien se puede realizar la búsqueda de colaboradores por algún texto contenido en alguno de los campos de su información asi como crear un nuevo colaborador</p>
<h2>Estado del proyecto</h2>
<h4 align="center"> :construction: Proyecto en construcción :construction: </h4>
<h2>Funcionalidades</h2>

 - Buscador de Colaborador: Al ingresar algún texto en la barra buscadora esta actualizará de forma inmediata y dinámica a los colaboradores que contengan dicha información.
 - Agregar Colaborador: Se debe ingresar un nombre y un email válido para que el colaborador sea ingresado, el ID se crea de forma incremental.
 - Actualizar Colaborador: Al presionar el botón de actualizar de alguno de los colaboradores se abre una ventana modal donde se puede actualizar el nombre y el email.
 - Eliminar Colaborador: Al presionar el botón de eliminar colaborador se borra de la tabla donde se muestra el listado de colaboradores.
				 
<h2>Tecnologías utilizadas</h2>
 
 - React V18.2.0
 - React Bootstrap V1.6.1
 
Además dentro de la programación se hace uso de Books como UseState y UseEffect.

<h2>BUGS</h2>
Bugs en proceso de corrección:

 - Crear Colaborador: Al crear un nuevo colaborador los input no se limpian automáticamente.
 - Actualizar Colaborador: Al actualizar un colaborador, luego eliminar a cualquier otro y tratar de actualizar cualquier otro colaborador este último se actualiza automáticamente con la data de la ultima actualización.
 - Eliminar Colaborador: Solo se puede eliminar 1 colaborador, al tratar de eliminar el segundo no realiza el proceso.
