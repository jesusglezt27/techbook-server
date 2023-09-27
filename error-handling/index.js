export default (app) => {
  app.use((req, res, next) => {
    // Este middleware se ejecuta cuando la página solicitada no está disponible
    res.status(404).json({ message: "Esta ruta no existe" });
  });

  app.use((err, req, res, next) => {
    // Siempre registra el error
    console.error("ERROR", req.method, req.path, err);

    // Solo renderiza si el error ocurrió antes de enviar la respuesta
    if (!res.headersSent) {
      res.status(500).json({
        message: "Error interno del servidor. Verifica la consola del servidor",
      });
    }
  });
};
