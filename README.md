# World phone

Landing page responsive para reparación de móviles y telecomunicaciones en Pamplona, construida con **Next.js + React**.

## Estructura

```text
app/layout.js       Metadatos
app/page.js         Interfaz, calculadora y formulario
app/globals.css     Diseño responsive
world-phone.html    Prototipo HTML original
package.json        Dependencias y comandos
```

No requiere base de datos en esta primera versión. La calculadora funciona en el navegador; el formulario es demostrativo hasta conectarlo a correo, WhatsApp o un servicio de formularios.

## Ejecutar y publicar

1. Instala Node.js LTS y ejecuta `npm install` y `npm run dev` desde esta carpeta.
2. Sube el proyecto a GitHub.
3. En Vercel, selecciona **Add New → Project**, importa el repositorio y deja **Next.js** y `./` detectados automáticamente.
4. Pulsa **Deploy**. Cada cambio enviado a GitHub generará un nuevo despliegue.
