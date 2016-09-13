# PHP Development Knowledge Checklist

## Programming
 - Basic
    * [Types](http://php.net/manual/en/language.types.php)
      * [Arrays](http://php.net/manual/en/language.types.array.php)
      * [Objects](http://php.net/manual/en/language.types.object.php)
      * [Resource](http://php.net/manual/en/language.types.resource.php)
      * [Type Juggling](http://php.net/manual/en/language.types.type-juggling.php)
    * [Variables](http://php.net/manual/en/language.variables.php)
    * [Constants](http://php.net/manual/en/language.constants.php)
      * [Magic constants](http://php.net/manual/en/language.constants.predefined.php)
    * [Operators](http://php.net/manual/en/language.operators.php)
      * [Error Control Operators](http://php.net/manual/en/language.operators.errorcontrol.php)
    * [Control Structures](http://php.net/manual/en/language.control-structures.php)
      * [foreach](http://php.net/manual/en/control-structures.foreach.php)
      * [require](http://php.net/manual/en/function.require.php)
      * [require_once](http://php.net/manual/en/function.require-once.php)
      * [include](http://php.net/manual/en/function.include.php)
      * [include_once](http://php.net/manual/en/function.include-once.php)
 - Major new features in PHP5.x
  * [5.3](http://php.net/manual/en/migration53.new-features.php)
  * [5.4](http://php.net/manual/en/migration54.new-features.php)
  * [5.5](http://php.net/manual/en/migration55.new-features.php)
  * [5.6](http://php.net/manual/en/migration56.new-features.php)
 - Migrate to PHP7.0
  * [New features](http://php.net/manual/en/migration70.php)
 - [Object-oriented Programming](http://php.net/language.oop5)
     * [Traits](http://php.net/language.oop5.traits)
     * [Anonymous Classes](http://php.net/manual/en/language.oop5.anonymous.php)
 - Functional Programming
     * [Anonymous Functions](http://php.net/functions.anonymous)
     * [Closure class](http://php.net/class.closure)
     * [Callables](http://php.net/language.types.callable)
     * [Generators](http://php.net/manual/en/language.generators.php)
 - Meta Programming
     * [Magic Method](http://php.net/language.oop5.magic)
     * [Reflaction](http://php.net/manual/en/book.reflection.php)
     * [Overloading](http://php.net/language.oop5.overloading)
 - [Namespaces](http://php.net/language.namespaces)
 - [SPL](http://php.net/manual/en/book.spl.php)
 - [CLI](http://php.net/features.commandline)
 - Databases
     * [Mysql](http://php.net/manual/en/book.mysql.php)
     * [Mysqli](http://php.net/manual/en/book.mysqli.php)
     * [MySQL Native Driver](http://php.net/manual/en/book.mysqlnd.php)
     * [PDO](http://php.net/pdo.connections)
 - File System
     * [Filesystem Functions](http://php.net/manual/en/book.filesystem.php)
 - Exception & Error Handler
     * [Exception](http://php.net/language.exceptions)
     * [Error Handler](http://php.net/manual/en/book.errorfunc.php)
 - Security
     * Web Application Security
       * [OWASP](https://www.owasp.org/index.php/Main_Page)
     * [Password Hashing](http://php.net/function.password-hash)
     * [Data Filtering](http://php.net/book.filter)
     * [Register Globals](http://php.net/security.globals)
 - Caching
     * Opcode Cache
       * [APC](http://php.net/book.apc)
       * [OPcache](http://php.net/book.opcache)
     * Object Caching
       * [APC](http://php.net/book.apc)
       * [Memcached](http://php.net/manual/en/book.memcached.php)
       * [Redis](http://redis.io/)
 - Testing
     * [PHPUnit](https://phpunit.de/)

## Dev tools
   * [Eclipse PHP Package](http://www.eclipse.org/downloads/packages/eclipse-php-developers/lunasr2)
   * [PHP_CodeSniffer](http://pear.php.net/package/PHP_CodeSniffer/)
   * [sublime-phpfmt](https://github.com/dericofilho/sublime-phpfmt)
   * [Xdebug](http://xdebug.org/docs/)
   * [PHPCPD](https://github.com/sebastianbergmann/phpcpd)
   * [PHPMD](http://phpmd.org/)
   * [PHP_Depend](http://pdepend.org/)
   * [Composer](http://getcomposer.org/)
   * [PEAR](http://pear.php.net/)
   * [PHPDoc](http://www.phpdoc.org/docs/latest/index.html)

## Libs & Frameworks
   * [Zend Framework](http://framework.zend.com/)
   * [Yii](http://www.yiiframework.com/)
   * [Slim](http://www.slimframework.com/)
   * [Wordpress](https://wordpress.org/)
   * [Drupal](https://www.drupal.org/download)

## Best practises
   * [Basic](http://www.phptherightway.com/pages/The-Basics.html)
   * [Working with UTF-8](http://www.phptherightway.com/#php_and_utf8)
   * [Design Patterns](http://www.phptherightway.com/pages/Design-Patterns.html)
     * Factory
     * Singleton
     * Strategy
     * [Dependency Injection](http://www.phptherightway.com/#dependency_injection)
     * Front Controller
     * MVC, HMVC
   * [Database](http://phpbridge.org/intro-to-php/creating_a_data_class)
   * [Exception](http://ralphschindler.com/2010/09/15/exception-best-practices-in-php-5-3)

## Extended
   * [PHP extenson in C](http://devzone.zend.com/303/extension-writing-part-i-introduction-to-php-and-zend/)
   * [HHVM/Hack](http://hhvm.com/)
   * PHP7 [[1]](https://philsturgeon.uk/php/2015/03/15/php-7-feature-freeze/) [[2]]( https://pages.zend.com/TY-Infographic.html) [[3]](https://blog.engineyard.com/2015/what-to-expect-php-7)

## More tools & frameworks
   * [Symfony](http://symfony.com/)
   * [Silex](http://silex.sensiolabs.org/)
   * [Laravel](http://laravel.com/)
   * [Lumen](http://lumen.laravel.com/)
   * Template
     - [Twig](http://twig.sensiolabs.org/)
   * HTTP
     - [Guzzle](http://docs.guzzlephp.org/en/latest/index.html)
     - [Requests](http://requests.ryanmccue.info/)
   * Date and Time
     - [Carbon ](http://carbon.nesbot.com/)
   * Office
     - [PHPExcel](https://github.com/PHPOffice/PHPExcel)

## Further reading
   * [PHP Change Log](http://php.net/ChangeLog-5.php)
   * [Design Patterns PHP](https://github.com/domnikl/DesignPatternsPHP)
   * [PHP RFC](https://wiki.php.net/rfc)
   * [Thinking in PHP Internals](http://www.php-internals.com/)
   * [PHP-CPP](http://www.php-cpp.com/)
   * [Awesome PHP](https://github.com/ziadoz/awesome-php)
   * [PHP Standards Recommendations](http://www.php-fig.org/psr/)
     - [PSR-2: Coding Style Guide](http://www.php-fig.org/psr/psr-2/)
