FROM python:3.6
ENV PYTHONUNBUFFERED 1
WORKDIR /app/api
COPY requirements.txt ./
RUN pip3 install --upgrade pip  -r requirements.txt
COPY . ./
EXPOSE 8000

