from fastapi import FastAPI

app = FastAPI()

todo = {}


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/add")
async def add():
    
    return {"message": "Hello World"}

@app.get("/del")
async def delete():
    return {"message": "Hello World"}

@app.get("/list")
async def list():
    return {"message": "Hello World"}
