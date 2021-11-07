#!/usr/bin/env python3

import asyncio
import websockets
import db

async def server(websocket, path):
    # Get received data from websocket
    data = await websocket.recv()
    tdat = data.split("=")

    if tdat[0] == "check":
        db.check(tdat[1])
    elif tdat[0] == "l-check":
        db.login(tdat[1])
        await websocket.send(db.nk())

# Create websocket server
start_server = websockets.serve(server, "localhost", 6789)
print("ready/")
# Start and run websocket server forever
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()