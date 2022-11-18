docker stop asc_eval_fe
docker rm asc_eval_fe
docker rmi asc_eval_fe_v1

docker build -t asc_eval_fe_v1 .
docker run -d -p 1313:1313 --name asc_eval_fe asc_eval_fe_v1
docker image prune -f

