import { Application } from "express";
import promMid from "express-prometheus-middleware";

import GET, { GETRoute } from "./routes/GET";
import authToken from "./middlewares/auth-token";

class App {
  constructor(app: Application, port: number) {
    app.use(authToken); // 'mysecrettoken' authorisation middleware
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
