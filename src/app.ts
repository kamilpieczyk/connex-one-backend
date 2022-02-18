import { Application } from "express";
import promMid from "express-prometheus-middleware";

import GET, { GETRoute } from "./routes/GET";

class App {
  constructor(app: Application, port: number) {
    // use prometheus middleware
    app.use(
      promMid({
        metricsPath: "/metrics",
        collectDefaultMetrics: true,
        collectGCMetrics: true,
      })
    );

    this.get(app);

    app.listen(port, () => {
      console.log(`🚀 app is running at port: ⚓${port}`);
    });
  }

  get(app: Application) {
    // this method handles all GET requests
    GET.forEach((getRoute: GETRoute) => {
      app.get(getRoute.route, getRoute.func);
    });
  }
}

export default App;
