import { Router } from "express";
import TriggerRouterHandler from "integrator/routes/TriggerRouterHandler.js";
import ActionRouterHandler from "integrator/routes/ActionRouterHandler.js";
import ApplicationRouterHandler from "integrator/routes/ApplicationRouterHandler.js";
import AuthRouterHandler from "integrator/routes/AuthRouterHandler";



const router: Router = Router();

router.use("/apps",ApplicationRouterHandler);
router.use("/auth",AuthRouterHandler);
router.use("/triggers",TriggerRouterHandler);
router.use("/actions",ActionRouterHandler);


export default router;





