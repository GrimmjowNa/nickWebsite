# Java Development Knowledge Checklist

## Programming
 * Basic
    * [OOP Concept](http://docs.oracle.com/javase/tutorial/java/concepts)
        * Class
        * Nested Class, Abstract Class, Enum
        * Object
        * Inheritance
        * Interface
        * Package
    * Variable
        * Instance Variable (Non-Static Field)
        * Class Variable (Static Field)
        * Local Variable
        * Parameter
    * Operator
    * Expression, Statement, Block
    * Control Flow Statement
        * if-then, if-then-else, switch
        * for, while, do-while
        * break, continue, return
    * Number and String
        * Byte(byte), Short(short), Integer(int), Long(long), Float(float), Double(double), Boolean(boolean), Character(char)
        * String
        * StringBuffer, StringBuider
    * Super, Final, This, Static
    * [Annotation](http://docs.oracle.com/javase/tutorial/java/annotations)
    * [Generic](http://docs.oracle.com/javase/tutorial/java/generics)
    * [Collection(Set, List, Map)](http://docs.oracle.com/javase/tutorial/collections)
    * [I/O](http://docs.oracle.com/javase/tutorial/essential/io/index.html)
        * Byte Streams
        * Character Streams
        * Buffered Streams
        * Object Streams
        * Data Streams
    * [Exception](http://docs.oracle.com/javase/tutorial/essential/exceptions/index.html)
        * try-catch-finally, throw
        * throws
    * [JDBC](http://docs.oracle.com/javase/tutorial/jdbc/basics/index.html)
    * [Regular Expression](http://docs.oracle.com/javase/tutorial/essential/regex/index.html)
 * Advance
    * [NIO(Channels, Buffers, Selectors)](http://docs.oracle.com/javase/7/docs/api/java/nio/package-summary.html)
    * [Concurrency(Thread, Synchronization)](http://docs.oracle.com/javase/tutorial/essential/concurrency/index.html)
    * [Reflection](http://docs.oracle.com/javase/tutorial/reflect/index.html)
    * [Socket](http://docs.oracle.com/javase/7/docs/api/java/net/Socket.html)
    * [JNDI](http://docs.oracle.com/javase/tutorial/jndi/index.html)
    * [JAXP](http://docs.oracle.com/javase/tutorial/jaxp/index.html)
    * [RMI](http://docs.oracle.com/javase/tutorial/rmi/index.html)
    * [JNI](http://docs.oracle.com/javase/tutorial/jndi/index.html)
    * Class Loader
    * JVM memory

## Dev tools
 * [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
 * [Eclipse](http://eclipse.org/)
 * [Netbeans](https://netbeans.org/)
 * [Tomcat](http://tomcat.apache.org/)
 * [JBoss](http://jbossas.jboss.org/)
 * [Jetty](http://www.eclipse.org/jetty/)
 * [Ant](http://ant.apache.org/)
 * [Maven](http://maven.apache.org/)
 * [Gradle](http://www.gradle.org/getting-started-jvm/)
 * [JConsole](http://docs.oracle.com/javase/7/docs/technotes/guides/management/jconsole.html)
 * [JVisualVM](http://docs.oracle.com/javase/7/docs/technotes/tools/share/jvisualvm.html)

## Libs & Frameworks
 * [JUnit](http://junit.org/)
 * [Quartz(Job scheduling)](http://www.quartz-scheduler.org/)
 * [Spring(Spring MVC, Spring JDBC, Spring Security)](http://spring.io/)
 * [MyBatis](http://blog.mybatis.org/)
 * [Hibernate](http://hibernate.org/)
 * [Struts2](http://struts.apache.org/)
 * [JSF](http://myfaces.apache.org/jsfintro.html)
 * [JPA](http://www.oracle.com/technetwork/java/javaee/tech/persistence-jsp-140049.html)
 * Jersey
 * Log
    * [sf4j](http://www.slf4j.org)
    * [commons-logging](http://commons.apache.org/proper/commons-logging)
    * [log4j](http://logging.apache.org/log4j)
 * DataBase connection pool
    * [Druid](https://github.com/alibaba/druid/wiki)
    * [DBCP](http://commons.apache.org/proper/commons-dbcp/)
    * [C3P0](http://sourceforge.net/projects/c3p0/)
    * [Proxool](http://proxool.sourceforge.net/)
 * Cache
    * Ehcache
    * Oscache
    * Jcache
    * Jbosscache
 * [Thrift](http://thrift.apache.org/tutorial/)
 * [Jedis](https://github.com/xetorthio/jedis)
 * [spring-amqp](http://projects.spring.io/spring-amqp/)
 * [EventBus](http://eventbus.org/)

## Best practises
 * [Oracle9i Application Server Best Practices](http://docs.oracle.com/cd/A97688_16/generic.903/bp/introduction.htm)
 * [Vogella Java Tutorials ](http://www.vogella.com/tutorials/java.html)
 * [Programming Notes](http://www3.ntu.edu.sg/home/ehchua/programming/index.html#Java)
 * [Design Patterns](http://www.javacamp.org/designPattern/)
 * Books
    * Effective Java
    * Undertanding the JVM Advanced Features and Best Practives
    * Java Concurrency in Practice
    * 改善java程序的151个建议

## Extended
 * [Groovy](http://www.groovy-lang.org/)
 * [JRuby](http://jruby.org/)
 * [Scala](http://www.scala-lang.org/)

## More tools & frameworks
 * [Guice(IOC)](http://code.google.com/p/google-guice/)
 * [Jersey(RESTful Web Services)](https://jersey.java.net/)
 * [EasyMock(test)](http://easymock.org/)
 * [Lucene(search)](http://lucene.apache.org/)
 * [Solr(search)](http://lucene.apache.org/solr/)
 * [Freemarker(template engine)](http://freemarker.org/)
 * [Velocity(template engine)](http://velocity.apache.org/)
 * [Thrift Java Clients Comparison](http://www.codelast.com/?p=4824)

## Further reading
* [Java 7 Features](http://www.eclipse.org/jdt/ui/r3_8/Java7news/whats-new-java-7.html)
    * Binary Literals
    * Strings in switch Statements
    * The try-with-resources Statement
    * Catching Multiple Exception Types and Rethrowing Exceptions with Improved Type Checking
    * Underscores in Numeric Literals
    * Type Inference for Generic Instance Creation
    * Improved Compiler Warnings and Errors When Using Non-Reifiable Formal Parameters with Varargs Methods
* Java 8 Features [refer1](http://www.oracle.com/technetwork/java/javase/8-whats-new-2157071.html) [refer2](http://openjdk.java.net/projects/jdk8/features) [refer3](http://www.techempower.com/blog/2013/03/26/everything-about-java-8/)
    * Lambda Expression
    * Functional Interface
    * Generic type inference improvement
    * Default method
    * Type Annotation
    * Nashorn JavaScript Engine
