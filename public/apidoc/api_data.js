define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./public/apidoc/main.js",
    "group": "C__Users_sasa7_Documents_iProcessi_Desarrollo_nuevo_backup_Node_Dashboard_public_apidoc_main_js",
    "groupTitle": "C__Users_sasa7_Documents_iProcessi_Desarrollo_nuevo_backup_Node_Dashboard_public_apidoc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/compensacionadquiriente",
    "title": "Compensacion Adquiriente",
    "name": "Compensacion_Adquiriente",
    "group": "Compensaci_n",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_inicial",
            "description": "<p>Fecha inicial de la consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_final",
            "description": "<p>Fecha final de la consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_cajero",
            "description": "<p>Id del quiosco a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_red",
            "description": "<p>Id de la red a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_geografia_padre",
            "description": "<p>Pais a consultar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de la compensaci??n de los adquirientes.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Compensaci_n"
  },
  {
    "type": "post",
    "url": "/totalescuadre",
    "title": "Totales Cuadre",
    "name": "Totales_Cuadre",
    "group": "Cuadre",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_inicial",
            "description": "<p>Fecha inicial de la consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_final",
            "description": "<p>Fecha final de la consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_cajero",
            "description": "<p>Id del quiosco a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_geografia_padre",
            "description": "<p>Pais a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_geografia",
            "description": "<p>Ciudad a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_red",
            "description": "<p>Red a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_administrador",
            "description": "<p>Id del administrador a consultar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de los totales de cuadre.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Cuadre"
  },
  {
    "type": "post",
    "url": "/administradores",
    "title": "Administradores",
    "name": "Administradores",
    "group": "Dashboard",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de los administradores.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Dashboard"
  },
  {
    "type": "get",
    "url": "/authrequired",
    "title": "Auth Required",
    "name": "Auth_Required",
    "group": "Dashboard",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n si la sesi??n tiene permisos.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Dashboard"
  },
  {
    "type": "post",
    "url": "/autorizadores",
    "title": "Autorizadores",
    "name": "Autorizadores",
    "group": "Dashboard",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n con los autorizadores.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Dashboard"
  },
  {
    "type": "post",
    "url": "/entidades",
    "title": "Entidades",
    "name": "Entidades",
    "group": "Dashboard",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de la lista de entidades.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Dashboard"
  },
  {
    "type": "post",
    "url": "/geografia",
    "title": "Geografia",
    "name": "Geografia",
    "group": "Dashboard",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de los paises y ciudades.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Dashboard"
  },
  {
    "type": "post",
    "url": "/cajeros",
    "title": "Quioscos",
    "name": "Quioscos",
    "group": "Dashboard",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n con los quioscos.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Dashboard"
  },
  {
    "type": "post",
    "url": "/redes",
    "title": "Redes",
    "name": "Redes",
    "group": "Dashboard",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n con la lista de redes.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Dashboard"
  },
  {
    "type": "post",
    "url": "/roles",
    "title": "Roles",
    "name": "Roles",
    "group": "Dashboard",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de los roles.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Dashboard"
  },
  {
    "type": "post",
    "url": "/tipousuariokiosko",
    "title": "Tipo Usuario Kiosko",
    "name": "Tipo_Usuario_Kiosko",
    "group": "Dashboard",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de los tipos de usuario en un quiosco.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Dashboard"
  },
  {
    "type": "post",
    "url": "/eventos",
    "title": "Tipos de eventos",
    "name": "Tipos_de_eventos",
    "group": "Dashboard",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n con los tipos de eventos.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Dashboard"
  },
  {
    "type": "post",
    "url": "/resultados",
    "title": "Tipos de resultados",
    "name": "Tipos_de_resultados",
    "group": "Dashboard",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n con los tipos de resultados.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Dashboard"
  },
  {
    "type": "post",
    "url": "/tipotransaccion",
    "title": "Tipos de transaccion",
    "name": "Tipos_de_transaccion",
    "group": "Dashboard",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n con los tipos de transacci??n.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Dashboard"
  },
  {
    "type": "post",
    "url": "/usuarioporquiosco",
    "title": "Usuario por Quiosco",
    "name": "Usuario_por_Quiosco",
    "group": "Dashboard",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de la lista de usuarios asociados a un quiosco.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Dashboard"
  },
  {
    "type": "post",
    "url": "/eventoskioskos",
    "title": "Eventos de un quiosco",
    "name": "Eventos_de_un_quiosco",
    "group": "Eventos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_inicial",
            "description": "<p>Fecha inicial de la consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_final",
            "description": "<p>Fecha final de la consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_cajero",
            "description": "<p>Id del quiosco a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "evento",
            "description": "<p>Tipo de evento a consultar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n con los eventos de uno o varios quioscos.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Eventos"
  },
  {
    "type": "post",
    "url": "/actualizarpwd",
    "title": "Actualizar Clave",
    "name": "Actualizar_Clave",
    "group": "Inicio_de_sesion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>C??dula o correo electr??nico del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "anterior",
            "description": "<p>Contrase??a anterior del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de la actulizaci??n de la contrase??a del usuario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Inicio_de_sesion"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Iniciar sesi??n",
    "name": "Login",
    "group": "Inicio_de_sesion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>C??dula o correo electr??nico del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contrase??a del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n del inicio de sesi??n</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Inicio_de_sesion"
  },
  {
    "type": "post",
    "url": "/olvidoclave",
    "title": "Olvid?? Clave",
    "name": "Olvid__Clave",
    "group": "Inicio_de_sesion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>C??dula o correo electr??nico del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n sobre el reinicio de sesi??n.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Inicio_de_sesion"
  },
  {
    "type": "post",
    "url": "/monitoreoinactividad",
    "title": "Inactividad",
    "name": "Incatividad",
    "group": "Monitoreo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_geografia_padre",
            "description": "<p>Id del pais a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_geografia",
            "description": "<p>Id de la ciudad a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_red",
            "description": "<p>Id de la red a consultar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de la inactividad de los quioscos.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Monitoreo"
  },
  {
    "type": "post",
    "url": "/aprobadasrechazadasDia",
    "title": "Aprobadas Rechazad Dia",
    "name": "Aprobadas_Rechazadas_Dia",
    "group": "Movimientos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "transaccion",
            "description": "<p>Tipo de transacci??n.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "resultado",
            "description": "<p>Tipo de resultado de la transacciones.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "autorizador",
            "description": "<p>Id del autorizador.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "cajero",
            "description": "<p>Id del quiosco.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Aprobadas/Rechazadas en el d??a.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Movimientos"
  },
  {
    "type": "post",
    "url": "/aprobadasrechazadasDia",
    "title": "Aprobadas Rechazad Mes",
    "name": "Aprobadas_Rechazadas_Mes",
    "group": "Movimientos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "transaccion",
            "description": "<p>Tipo de transacci??n.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "resultado",
            "description": "<p>Tipo de resultado de la transacciones.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "autorizador",
            "description": "<p>Id del autorizador.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "cajero",
            "description": "<p>Id del quiosco.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Aprobadas/Rechazadas en el mes.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Movimientos"
  },
  {
    "type": "post",
    "url": "/movimientos",
    "title": "Movimientos",
    "name": "Movimientos",
    "group": "Movimientos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_inicial",
            "description": "<p>Fecha inicial de la consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_final",
            "description": "<p>Fecha final de la consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_cajero",
            "description": "<p>Id del quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "tipo_transaccion",
            "description": "<p>Id del tipo de las transacciones.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_geografia_padre",
            "description": "<p>Id del pais a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_geografia",
            "description": "<p>Id de la ciudad a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_red",
            "description": "<p>Id de la red a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "valor_tx",
            "description": "<p>Valor de las transacciones a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ref_recaudo",
            "description": "<p>Cedula del usuario de la transacci??n.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "autorizacion",
            "description": "<p>N??mero de la autorizaci??n.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Movimientos de a consulta.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Movimientos"
  },
  {
    "type": "post",
    "url": "/horas",
    "title": "Movimientos en el anho",
    "name": "Movimientos_en_el_anho",
    "group": "Movimientos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha",
            "description": "<p>Fecha de la consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "transaccion",
            "description": "<p>Tipo de transacci??n.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "resultado",
            "description": "<p>Tipo de resultado de la transacciones.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "autorizador",
            "description": "<p>Id del autorizador.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "cajero",
            "description": "<p>Id del quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pais",
            "description": "<p>Id del pais.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ciudad",
            "description": "<p>Id de la ciudad.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Movimientos en el anho.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Movimientos"
  },
  {
    "type": "post",
    "url": "/horas",
    "title": "Movimientos en el d??a",
    "name": "Movimientos_en_el_d_a",
    "group": "Movimientos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha",
            "description": "<p>Fecha de la consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "transaccion",
            "description": "<p>Tipo de transacci??n.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "resultado",
            "description": "<p>Tipo de resultado de la transacciones.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "autorizador",
            "description": "<p>Id del autorizador.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "cajero",
            "description": "<p>Id del quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pais",
            "description": "<p>Id del pais.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ciudad",
            "description": "<p>Id de la ciudad.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Movimientos en el d??a.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Movimientos"
  },
  {
    "type": "post",
    "url": "/mes",
    "title": "Movimientos en el mes",
    "name": "Movimientos_en_el_mes",
    "group": "Movimientos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha",
            "description": "<p>Fecha de la consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "transaccion",
            "description": "<p>Tipo de transacci??n.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "resultado",
            "description": "<p>Tipo de resultado de la transacciones.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "autorizador",
            "description": "<p>Id del autorizador.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "cajero",
            "description": "<p>Id del quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pais",
            "description": "<p>Id del pais.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ciudad",
            "description": "<p>Id de la ciudad.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Movimientos en el mes.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Movimientos"
  },
  {
    "type": "post",
    "url": "/updatefuncionario",
    "title": "Actualizar Funcionario",
    "name": "Actualizar_Funcionario",
    "group": "Parametros",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identificacion",
            "description": "<p>C??dula del funcionario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electr??nico del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "entidades",
            "description": "<p>Entidades asociadas al usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "administradores",
            "description": "<p>Administradores asociados al usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "tipoUsuario",
            "description": "<p>Tipo de funcionario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado del funcionario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>Contrase??a inicial del funcionario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de la actualizaci??n del funcionario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Parametros"
  },
  {
    "type": "post",
    "url": "/updateuser",
    "title": "Actualizar Usuario",
    "name": "Actualizar_Usuario",
    "group": "Parametros",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identificacion",
            "description": "<p>C??dula del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electr??nico del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellido1",
            "description": "<p>Primer apellido del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellido2",
            "description": "<p>Segundo apellido del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "entidades",
            "description": "<p>Entidades asociadas al usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "administradores",
            "description": "<p>Administradores asociados al usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rol",
            "description": "<p>Rol del usuario en iProcessi.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de la actualizaci??n del usuario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Parametros"
  },
  {
    "type": "post",
    "url": "/crearfuncionariokiosco",
    "title": "Asociar Funcionario a quiosco",
    "name": "Asociar_Funcionario_a_quiosco",
    "group": "Parametros",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cajero",
            "description": "<p>Serial del quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pais",
            "description": "<p>Id del pais al que se quiere asociar el funcionario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ciudad",
            "description": "<p>Id de la ciudad a la que se quiere asociar el funcionario</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "entidades",
            "description": "<p>Entidades asociadas al usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "administradores",
            "description": "<p>Administradores asociados al usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "usuario",
            "description": "<p>C??dula del usuario que se quiere asociar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de la asociaci??n del funcionario a el/los quioscos.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Parametros"
  },
  {
    "type": "post",
    "url": "/clavefuncionario",
    "title": "Clave funcionario",
    "name": "Clave_Funcionario",
    "group": "Parametros",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identificacion",
            "description": "<p>C??dula del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwdanteriro",
            "description": "<p>Contrase??a anterior del funcionario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwdnueva",
            "description": "<p>Contrase??a nueva del funcionario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n del cambio de contrase??a del funcionario</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Parametros"
  },
  {
    "type": "post",
    "url": "/agregarkiosco",
    "title": "Crear quiosco",
    "name": "Crear_quiosco",
    "group": "Parametros",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_cajero",
            "description": "<p>Id del quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_entidad",
            "description": "<p>Id de la entidad due??a del quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_marca",
            "description": "<p>Id de la marca del quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_modelo",
            "description": "<p>Id del modelo del quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>Serial del quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_administrador",
            "description": "<p>Id del administrador del quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Direcci??n en la que se encuentra el quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "latitud",
            "description": "<p>Latitud en la que se encuentra el quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "longitud",
            "description": "<p>Longitud en la que se encuentra el quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_geografia",
            "description": "<p>Id de la ciudad en la que se encuentra el quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "gaveta1",
            "description": "<p>Denominaci??n de la gaveta 1.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "gaveta2",
            "description": "<p>Denominaci??n de la gaveta 2.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "gaveta3",
            "description": "<p>Denominaci??n de la gaveta 3.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "gaveta4",
            "description": "<p>Denominaci??n de la gaveta 4.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "gaveta5",
            "description": "<p>Denominaci??n de la gaveta 5.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "gaveta6",
            "description": "<p>Denominaci??n de la gaveta 6.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Lista de los usuarios registrados.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Parametros"
  },
  {
    "type": "post",
    "url": "/borrarfuncionariokiosco",
    "title": "Desasociar Funcionario a quiosco",
    "name": "Desasociar_Funcionario_a_quiosco",
    "group": "Parametros",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cajero",
            "description": "<p>Serial del quiosco.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pais",
            "description": "<p>Id del pais al que se quiere asociar el funcionario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ciudad",
            "description": "<p>Id de la ciudad a la que se quiere asociar el funcionario</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "entidades",
            "description": "<p>Entidades asociadas al usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "administradores",
            "description": "<p>Administradores asociados al usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "usuario",
            "description": "<p>C??dula del usuario que se quiere asociar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de la asociaci??n del funcionario a el/los quioscos.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Parametros"
  },
  {
    "type": "post",
    "url": "/deletefuncionario",
    "title": "Eliminar Funcionario",
    "name": "Eliminar_Funcionario",
    "group": "Parametros",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identificacion",
            "description": "<p>C??dula del funcionario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de la eliminacion del funcionario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Parametros"
  },
  {
    "type": "post",
    "url": "/funcionarioexists",
    "title": "Existe Funcionario",
    "name": "Existe_Funcionario",
    "group": "Parametros",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "identificacion",
            "description": "<p>C??dula del funcionario a buscar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n si existe un funcionario con la c??dula.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Parametros"
  },
  {
    "type": "post",
    "url": "/userexists",
    "title": "Existe Usuario",
    "name": "Existe_Usuario",
    "group": "Parametros",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "identificacion",
            "description": "<p>C??dula del usuario a buscar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n si existe un usuario con la c??dula.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Parametros"
  },
  {
    "type": "post",
    "url": "/funcionarioslist",
    "title": "Lista de funcionarios",
    "name": "Lista_de_funcionarios",
    "group": "Parametros",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Lista de los funcionarios creados.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Parametros"
  },
  {
    "type": "post",
    "url": "/userslist",
    "title": "Lista de usuarios",
    "name": "Lista_de_usuarios",
    "group": "Parametros",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Lista de los usuarios registrados.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Parametros"
  },
  {
    "type": "post",
    "url": "/registerfuncionario",
    "title": "Registrar Funcionario",
    "name": "Registrar_Funcionario",
    "group": "Parametros",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identificacion",
            "description": "<p>C??dula del funcionario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electr??nico del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "entidades",
            "description": "<p>Entidades asociadas al usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "administradores",
            "description": "<p>Administradores asociados al usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "tipoUsuario",
            "description": "<p>Tipo de funcionario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado del funcionario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>Contrase??a inicial del funcionario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de la creaci??n del funcionario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Parametros"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Registrar Usuario",
    "name": "Registrar_Usuario",
    "group": "Parametros",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identificacion",
            "description": "<p>C??dula del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electr??nico del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellido1",
            "description": "<p>Primer apellido del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellido2",
            "description": "<p>Segundo apellido del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "entidades",
            "description": "<p>Entidades asociadas al usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "administradores",
            "description": "<p>Administradores asociados al usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rol",
            "description": "<p>Rol del usuario en iProcessi.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de la creaci??n del usuario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Parametros"
  },
  {
    "type": "post",
    "url": "/efectivoCajero",
    "title": "Efectivo en el quiosco",
    "name": "Efectivo_en_el_quiosco",
    "group": "Quiosco",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Efectivo en los quioscos.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Quiosco"
  },
  {
    "type": "get",
    "url": "/otpToken",
    "title": "OTP Token",
    "name": "OTP_Token",
    "group": "Quiosco",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>Contrase??a del usuario del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_cajero",
            "description": "<p>Id del quiosco a consultar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n del token del quiosco.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Quiosco"
  },
  {
    "type": "post",
    "url": "/totalesdia",
    "title": "Totales Dia",
    "name": "Totales_Recaudo",
    "group": "Reportes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_inicial",
            "description": "<p>Fecha inicial de la consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_final",
            "description": "<p>Fecha final de la consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_cajero",
            "description": "<p>Id del quiosco a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_geografia_padre",
            "description": "<p>Pais a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_geografia",
            "description": "<p>Ciudad a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_red",
            "description": "<p>Red a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_administrador",
            "description": "<p>Id del administrador a consultar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n con los totales de un d??a.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Reportes"
  },
  {
    "type": "post",
    "url": "/totalesrecaudo",
    "title": "Totales Recaudo",
    "name": "Totales_Recaudo",
    "group": "Reportes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_inicial",
            "description": "<p>Fecha inicial de la consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_final",
            "description": "<p>Fecha final de la consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_cajero",
            "description": "<p>Id del quiosco a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_geografia_padre",
            "description": "<p>Pais a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_geografia",
            "description": "<p>Ciudad a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_red",
            "description": "<p>Red a consultar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_administrador",
            "description": "<p>Id del administrador a consultar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>Informaci??n de los totales de recaudo.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Reportes"
  }
] });
