import express from 'express' ;
import { authMiddleWare, authorize } from '../middlewares/authMiddleware.js' ;
import { createComplaint,patchComplaint, commentOnComplaint, deleteComplaint, deleteComment ,
resolveComplaint, escalateComplaint, getMyComplaints, getAllComplaints,getAllComplaintsAdmin,
seeComments} from '../controllers/complaint.controller.js';
import { downvoteComplaint, upvoteComplaint } from '../controllers/vote.controller.js';
import {AdminauthMiddleWare} from '../middlewares/AdminAuthMiddleware.js'
const router = express.Router() ;


// Create a complaint and assign it to a warden
router.post('/create',authMiddleWare, createComplaint) ;

router.get('/my/:id',authMiddleWare, getMyComplaints) ;
router.get('/all', authMiddleWare,getAllComplaints) ;

// Vote for a complaint
router.post('/upvote/:complaintId', authMiddleWare, upvoteComplaint) ;
router.post('/downvote/:complaintId', authMiddleWare, downvoteComplaint) ;

// Comment on a complaint
router.post('/comment/:complaintId',authMiddleWare, commentOnComplaint) ;
// Delete comment on complaint
router.delete('/comment/:complaintId/:commentId',authMiddleWare,deleteComment) ;
// See comments
router.get('/comment/:complaintId',AdminauthMiddleWare,seeComments) ;

// Delete a complaint
router.delete("/delete/:complaintId", authMiddleWare, deleteComplaint) ;

// Resolve a complaint
router.put('/resolve/:complaintId',AdminauthMiddleWare, authorize('warden'),resolveComplaint) ; 

// Route to escalate a complaint
router.put("/escalate/:complaintId", AdminauthMiddleWare ,authorize('warden'),escalateComplaint) ;

//router.put('/:id/resolve',authMiddleWare, resolveComplaint) ; 
router.get("/",AdminauthMiddleWare,getAllComplaintsAdmin);
router.patch("/:id",patchComplaint);

export default router ; 