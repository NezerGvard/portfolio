import psycopg2
from psycopg2 import sql
from psycopg2 import Error
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
conn = psycopg2.connect(dbname='project', user='postgres', 
                        password='192939', host='localhost', port='5433')
    