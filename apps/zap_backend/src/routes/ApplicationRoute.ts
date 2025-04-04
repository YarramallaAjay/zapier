import { Router } from "express";
import ApplicationRouterHandler from "../integrator/routes/ApplicationRouterHandler";
// import TriggerRouterHandler from "../integrator/routes/TriggerRouterHandler";
// import ActionRouterHandler from "../integrator/routes/ActionRouteHandler";


const router: Router = Router();

router.use("/apps",ApplicationRouterHandler);
// router.use("/trigger",TriggerRouterHandler);
// router.use("/action",TriggerRouterHandler);


export default router;





