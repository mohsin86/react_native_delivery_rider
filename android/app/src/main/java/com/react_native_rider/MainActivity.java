 package com.react_native_rider; // removet is on purpose of naviation



import com.facebook.react.ReactActivity;

/*
import com.facebook.react.ReactActivityDelegate; // added for navigation
import com.facebook.react.ReactRootView; // added for navigation
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView; // added for navigation
*/
public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "react_native_rider";
    }

    /*

// newly added by me // added for navigation
     @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
      return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
        protected ReactRootView createRootView() {
            return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
    */
// newly added by me
}
