import express from 'express';
import { home,getAllTasks ,createTask,getTask,updateTask,deleteTask,editTaskPage} from '../controllers/tasks.js';
const  router = express.Router();


router.route('/').get(home)
router.route('/edit').get(editTaskPage)
router.route('/api/tasks').get(getAllTasks).post(createTask)
router.route('/api/tasks/:id').get(getTask)
router.route('/api/tasks/:id').patch(updateTask)
router.route('/api/tasks/:id').delete(deleteTask)

export {router}
