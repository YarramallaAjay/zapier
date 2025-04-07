import { Router } from "express";
import ApplicationRouterHandler from "../integrator/routes/ApplicationRouterHandler";
import AuthRouterHandler from "../integrator/routes/AuthRouterHandler";
import TriggerRouterHandler from "../integrator/routes/TriggerRouterHandler";
import ActionRouterHandler from "../integrator/routes/ActionRouterHandler";
// import TriggerRouterHandler from "../integrator/routes/TriggerRouterHandler";
// import ActionRouterHandler from "../integrator/routes/ActionRouteHandler";


const router: Router = Router();

router.use("/apps",ApplicationRouterHandler);
router.use("/auth",AuthRouterHandler);
router.use("/triggers",TriggerRouterHandler);
router.use("/actions",ActionRouterHandler);


export default router;





