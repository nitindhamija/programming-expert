public class BillPughSingleton {

    private BillPughSingleton() {
    }

    private static class SingletonHelper {
        private static final BillPughSingleton INSTANCE = new BillPughSingleton();
    }

    public static BillPughSingleton getInstance() {
        return SingletonHelper.INSTANCE;
    }
}

// Notice the private inner static class that contains the instance of the
// singleton class. When the singleton class is loaded, SingletonHelper class is
// not loaded into memory and only when someone calls the getInstance method,
// this class gets loaded and creates the Singleton class instance.
// This is the most widely used approach for Singleton class as it doesn’t
// require synchronization

// reflection can break this singleton pattern and double checking and almost
// all other except enum

// use cases of singleton are in logging, driver connection and cache and other
// cross-cutting concern etc