import { Application } from "express";

import GET, { GETRoute } from "./routes/GET";

class App {
  constructor(app: Application, port: number) {
    this.get(app);
    app.listen(port, () => {
      console.log(`🚀 app is running at port: ⚓${port}`);
    });
  }

  get(app: Application) {
    GET.forEach((getRoute: GETRoute) => {
      app.get(getRoute.route, getRoute.func);
    });
  }
}

export default App;
