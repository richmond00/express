### run redis server
redis-server --daemonize yes

### run redis server for test
redis-server --daemonize yes --port 6380 --requirepass test_env

### run artillery
artillery run load-test.yml
