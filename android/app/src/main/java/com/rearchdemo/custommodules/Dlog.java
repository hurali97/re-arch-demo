package com.rearchdemo.custommodules;
import com.facebook.react.bridge.ReactApplicationContext;
import android.util.Log;

public class Dlog extends NativeDlogSpec {
    private static final String TAG = "Dlog";
    public static final String NAME = "Dlog";

    public Dlog(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public void log(String message) {
        Log.d(TAG, message);
    }
}
