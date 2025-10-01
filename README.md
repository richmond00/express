### run redis server
redis-server --daemonize yes

### run redis server for test
redis-server --daemonize yes --port 6380 --requirepass test_env

### ssh vm
ssh -i ~/.ssh/rsa ubuntu@ip

### run artillery
artillery run load-test.yml

# pm2
sudo pm2 start build/index.js -i max --time