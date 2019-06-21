package engines;

import models.GameModel;
import engines.GameEngine;

public class CollisionEngine {
    public void updateState(GameModel state) {
    	if(state.getBall().getY() < 0) {
    		state.getBall().setY(0);
    		double slowedVelocity = state.getBall().getyVelocity();
    		state.getBall().setyVelocity(slowedVelocity * (-0.5));
    	}
   }
}