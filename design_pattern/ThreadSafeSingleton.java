package design_pattern;

//double checked locking
public class ThreadSafeSingleton {
    private String str;
    private static volatile ThreadSafeSingleton instance;

    private ThreadSafeSingleton(String str) {
        this.str = str;
    }

    public static ThreadSafeSingleton getInstanceUsingDoubleLocking() {
        if (instance == null) {
            synchronized (ThreadSafeSingleton.class) {
                if (instance == null) {
                    instance = new ThreadSafeSingleton("abc");
                }
            }
        }
        return instance;
    }

    public static void main(String[] args) {
        ThreadSafeSingleton threadSafeSingleton = getInstanceUsingDoubleLocking();
        System.out.println(threadSafeSingleton.str);

    }

}