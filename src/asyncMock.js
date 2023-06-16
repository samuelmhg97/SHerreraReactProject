let products = [
    {
      id: 1,
      titulo: "Curso de Productividad para Nómadas",
      descripcion: "Aprende técnicas y herramientas para aumentar tu productividad mientras trabajas como nómada o freelancer.",
      precio: 99.99,
      urlImagen: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      tag: "nomada",
      stock: 25
    },
    {
      id: 2,
      titulo: "Curso de Finanzas Personales para Freelancers",
      descripcion: "Descubre cómo administrar tus finanzas de manera efectiva y optimizar tus ingresos como freelancer.",
      precio: 79.99,
      urlImagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tag: "freelancer",
      stock: 25
    },
    {
      id: 3,
      titulo: "Curso de Gestión del Tiempo",
      descripcion: "Aprende a organizar tu tiempo de manera eficiente y evitar la procrastinación en tu trabajo como nómada o freelancer.",
      precio: 69.99,
      urlImagen: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tag: "nomada",
      stock: 25
    },
    {
      id: 4,
      titulo: "Curso de Automatización de Tareas",
      descripcion: "Descubre herramientas y estrategias para automatizar tareas repetitivas y optimizar tu flujo de trabajo.",
      precio: 49.99,
      urlImagen: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      tag: "freelancer",
      stock: 25
    },
    {
      id: 5,
      titulo: "Curso de Coworking y Espacios de Trabajo Remoto",
      descripcion: "Aprende a elegir y aprovechar los espacios de coworking y trabajar de forma remota de manera efectiva.",
      precio: 89.99,
      urlImagen: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tag: "nomada",
      stock: 25
    }
//     {
//       "id": 6,
//       "titulo": "Curso de Networking para Freelancers",
//       "descripcion": "Descubre cómo construir y mantener una red de contactos sólida para impulsar tu carrera como freelancer.",
//       "precio": 59.99,
//       "urlImagen": "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//       "tag": "freelancer"
//     },
//     {
//       "id": 7,
//       "titulo": "Curso de Gestión Financiera para Nómadas",
//       "descripcion": "Aprende a manejar tus finanzas mientras te desplazas como nómada digital y garantiza tu estabilidad económica.",
//       "precio": 79.99,
//       "urlImagen": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//       "tag": "nomada"
//     },
//     {
//       "id": 8,
//       "titulo": "Curso de Marketing Personal para Freelancers",
//       "descripcion": "Descubre cómo promocionar y vender tus servicios como freelancer a través de estrategias de marketing personal.",
//       "precio": 69.99,
//       "urlImagen": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//       "tag": "freelancer"
//     },
//     {
//       "id": 9,
//       "titulo": "Curso de Viajar con un Presupuesto Limitado",
//       "descripcion": "Aprende consejos y trucos para viajar de forma económica y sacar el máximo provecho de tus aventuras como nómada.",
//       "precio": 59.99,
//       "urlImagen": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//       "tag": "nomada"
//     },
//     {
//     "id": 10,
//     "titulo": "Curso de Gestión de Proyectos para Freelancers",
//     "descripcion": "Aprende las mejores prácticas y herramientas para gestionar proyectos de forma efectiva como freelancer.",
//     "precio": 79.99,
//     "urlImagen": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     "tag": "freelancer"
//   },
//   {
//     "id": 11,
//     "titulo": "Curso de Marketing de Contenidos para Nómadas",
//     "descripcion": "Descubre cómo crear y promocionar contenido relevante y de calidad para tu negocio como nómada digital.",
//     "precio": 69.99,
//     "urlImagen": "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     "tag": "nomada"
//   },
//   {
//     "id": 12,
//     "titulo": "Curso de Gestión de Clientes y Negociaciones",
//     "descripcion": "Aprende estrategias para gestionar clientes, cerrar negociaciones exitosas y mantener relaciones duraderas.",
//     "precio": 89.99,
//     "urlImagen": "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     "tag": "freelancer"
//   },
//   {
//     "id": 13,
//     "titulo": "Curso de Mindfulness para Nómadas",
//     "descripcion": "Descubre técnicas de mindfulness y meditación para mantener el equilibrio y bienestar mientras viajas y trabajas como nómada.",
//     "precio": 59.99,
//     "urlImagen": "https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80",
//     "tag": "nomada"
//   },
//   {
//     "id": 14,
//     "titulo": "Curso de Negocios en Línea para Freelancers",
//     "descripcion": "Aprende cómo emprender y gestionar un negocio en línea como freelancer, desde la idea hasta la ejecución.",
//     "precio": 99.99,
//     "urlImagen": "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1125&q=80",
//     "tag": "freelancer"
//   },
//   {
//     "id": 15,
//     "titulo": "Curso de Organización de Viajes",
//     "descripcion": "Descubre cómo planificar y organizar tus viajes de manera eficiente, maximizando tu tiempo y recursos.",
//     "precio": 79.99,
//     "urlImagen": "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
//     "tag": "nomada"
//   },
//   {
//     "id": 16,
//     "titulo": "Curso de Estrategias de Negocios para Freelancers",
//     "descripcion": "Aprende a desarrollar estrategias efectivas para impulsar el crecimiento y la rentabilidad de tu negocio como freelancer.",
//     "precio": 89.99,
//     "urlImagen": "https://images.unsplash.com/photo-1532618793091-ec5fe9635fbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     "tag": "freelancer"
//   },
//   {
//     "id": 17,
//     "titulo": "Curso de Salud y Bienestar para Nómadas",
//     "descripcion": "Descubre cómo cuidar tu salud física y mental mientras te desplazas como nómada digital.",
//     "precio": 69.99,
//     "urlImagen": "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     "tag": "nomada"
//   },
//   {
//     "id": 18,
//     "titulo": "Curso de Fotografía para Freelancers",
//     "descripcion": "Aprende técnicas y consejos de fotografía para mejorar la calidad visual de tus proyectos como freelancer.",
//     "precio": 59.99,
//     "urlImagen": "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     "tag": "freelancer"
//   }
  ]
   
export const getProducts = () => {
    // let response = await fetch("./Products.json")
    // let products = await response.json

    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(productId)))
        })
    })
}

export const getProductByCategories= (productCategory) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.tag === parseInt(productCategory)))
      })
  })
}