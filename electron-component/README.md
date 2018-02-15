# Electron Communicator

This is a wrapper that will handle the communication between:

1) "Dor Le Dor" Dashboard.
2) Additional windows. (currently web.whatsapp)

## Installing

run:

1) npm i
2) npm start
3) in "dor le dor" GUI simply send your message in the following format: 

```
window.postMessage(
    {
        platform: 'whatsapp',
        groups: ['עזרה בדרך'],
        message: 'היי חברים זו בדיקה'
    },
    'http://localhost:8080')
    
```

### Params Explained:
    
postMessage is getting 2 params:

1) Object with properties as follow:

    1.1) platform - string represent the message provider - should by aligned with electron main.
    
    1.2) groups - a list with the group names - those we want to receive this message.
    
    1.3) message - string represent the message to send.



2) origin - string represent the url for your source of "dor le dor" dashboard ("*" for all) - 
   I commented out the check of origin - so all should be accepted
   
   

🙏 Please try to touch only the file --> scripts/whatsapp.js.
 
Thanks  and good Luck with the Hackathon! 💪 🤘 

