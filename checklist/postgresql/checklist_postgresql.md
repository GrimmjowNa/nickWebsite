# Postgres Development Knowledge Checklist
----------
# [Basic SQL](http://www.postgresql.org/docs/9.3/static/sql.html) #
- Data Definition
	- CREATE, ALTER, DROP
	- Constraint: primary key, foreign key, not null, unique 
- Data Manipulation: 
	- INSERT, UPDATE, DELETE
- Query
	- Join types: INNER JOIN, LEFT JOIN etc.
	- Grouping, sorting and limit
# Advanced SQL and PL/pgSQL #
- [Transaction Isolation and Lock](http://www.postgresql.org/docs/9.3/static/mvcc.html)
- [PL/pgSQL function](http://www.postgresql.org/docs/9.3/static/plpgsql.html)
- [Windows function](http://www.postgresql.org/docs/9.3/static/tutorial-window.html)
- [Common table expression](http://www.postgresql.org/docs/9.3/static/queries-with.html)
- [Psql command line tool](http://www.postgresql.org/docs/9.3/static/app-psql.html)


# Query Tuning #
- Basic Rule
  - Eliminate unnecessary query/join/sorting
  - Restrict number of rows by using where/join condition
  - Only select column required
  - Utilize indexs
  - Utilize temp tables for complex query
- Performance Tuning Introduction
	- [Postgres Performance Tips](http://www.postgresql.org/docs/9.3/static/performance-tips.html)
	- [Performance Tuning PostgreSQL](http://www.revsys.com/writings/postgresql-performance.html)
- [Index Introduction](http://www.postgresql.org/docs/9.3/static/indexes.html)
- Execution Plan
  - [Some Resources Related to Execution Plan](https://wiki.postgresql.org/wiki/Using_EXPLAIN)
  - [Execution Plan Introduction](http://www.postgresguide.com/performance/explain.html)
  - Capture Detail Plan for PL/pgSQL Function with auto_explain
<pre><code>
LOAD 'auto_explain';
SET auto_explain.log_min_duration = 1; -- exclude very fast trivial queries
SET auto_explain.log_nested_statements = ON; -- statements inside functions
SET auto_explain.log_analyze = ON; -- get actual times, too

--execute your function;
</pre></code>
 
# Client Library #
- Python
	- [Using psycopg2 with PostgreSQL](https://wiki.postgresql.org/wiki/Using_psycopg2_with_PostgreSQL)


# Database Administration #
- Installation
	- [Install on Ubuntu #1](http://www.postgresql.org/download/linux/ubuntu/)
	- [Install on Ubuntu #2](https://help.ubuntu.com/community/PostgreSQL)
- Backup and restore
- [System Catalogs](http://www.postgresql.org/docs/9.3/static/catalogs.html)
- [Server Config Tuning](https://wiki.postgresql.org/wiki/Tuning_Your_PostgreSQL_Server)
	- [Annotated postgresql.conf](http://www.varlena.com/GeneralBits/Tidbits/annotated_conf_e.html)
	- [Augploy postgresql.conf template](http://git.augmentum.com.cn/ops/augploy/blob/master/roles/postgresql/templates/postgresql.conf)
- [HA, LB, Replication](http://www.postgresql.org/docs/9.3/static/high-availability.html)
- [Routine Maintanence Task](http://www.postgresql.org/docs/9.3/static/maintenance.html)
	- [Vacuum](http://www.cnblogs.com/daduxiong/archive/2010/10/11/1847975.html)
- Manual Table Partition
	- [Introduction #1](http://www.cnblogs.com/mchina/archive/2013/04/09/2973427.html)
	- [Introduction #2](http://www.cnblogs.com/stephen-liu74/archive/2012/04/27/2291814.html)
	- [Issue/solution #1](http://stackoverflow.com/questions/22026354/insert-trigger-ends-up-inserting-duplicate-rows-in-partitioned-table)
	- [Issue/solution #2](http://stackoverflow.com/questions/22929675/postgres-trigger-based-insert-redirection-without-breaking-returning)
- [Table Partition Tools](https://github.com/keithf4/pg_partman)

# Monitor Tool #
- [check_postgres](https://bucardo.org/wiki/Check_postgres)
- [pgtop](http://pgfoundry.org/projects/pgtop/)
- [htop](http://hisham.hm/htop/)

# Postgres Modules and Extensions #
## Common ##
- [pg_partman](https://github.com/keithf4/pg_partman): table partition tool
- [pg_stat_statements](http://www.postgresql.org/docs/9.2/static/pgstatstatements.html): tracking execution statistics of all SQL statements 
- [pgagent](http://www.pgadmin.org/docs/1.4/pgagent.html): database schedule job
- [auto_explain](http://www.postgresql.org/docs/9.3/static/auto-explain.html): record slow query's execution plan

## Specific Area ##
- [plr](http://www.joeconway.com/plr/): postgres integration with R project
- [smlar](http://sigaev.ru/): similarity algorithm 
- [tablefunc](http://www.postgresql.org/docs/9.3/static/tablefunc.html): pivot table function
- [PostGIS](http://www.postgis.org/): store and query of information about location and mapping
	- [PostGIS Introduction](http://postgis.net/development/)
	- [PostGIS Doc](http://postgis.net/docs/manual-2.1/)
	- [GeoDjango](https://docs.djangoproject.com/en/dev/ref/contrib/gis/tutorial/)
	

# Utilities #
- [apgdiff](http://apgdiff.com/): diff postgres database schemas
- [diffkit](http://www.diffkit.org/): data comparison tool

## Best practises
- [Database Development Best Practices PostgreSQL](http://git.augmentum.com.cn/strade/document/uploads/c914541a46223c0baa876a25dcbe2887/DatabaseDevelopment_Best_Practices_version_1_0_-_PostgreSQL.docx)
 
# Useful Resources #
- [Postgres Training Videos](\\192.168.1.20\development\STrade\6.Share\PostgreSQL)
- [Postgres Documentation](http://www.postgresql.org/docs/)
- [Postgres Wiki](https://wiki.postgresql.org/wiki/Main_Page)
- [PostgreSQL Related Slides and Presentations](https://wiki.postgresql.org/wiki/PostgreSQL_Related_Slides_and_Presentations)
- [Digoal](http://blog.163.com/digoal@126/)
- [Greg Smith](http://stackoverflow.com/users/118240/greg-smith)