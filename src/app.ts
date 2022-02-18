import { Application } from "express";

class App {
  constructor(app: Application, port: number) {
    app.listen(port, () => {
      console.log(`🚀 app is running at port: ⚓${port}`);
    });
  }
}

export default App;
