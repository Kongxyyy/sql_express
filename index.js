const sql = require('mssql');

const config = {
    server: 'pbp155',
    database: 'db_API',
    user: 'Cost_Team',
    password: 'Cost@User1',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

sql.connect(config, function(err) {
    if (err) {
        console.log(err);
    } else {
        var request = new sql.Request();
        request.query("SELECT DISTINCT [Line/Machine Group] FROM [PMA].[View_tb_LineMachineCapacity]", function(err, records) {
            if (err) {
                console.log(err);
            } else {
                console.log(records);
            }
        });
    }
});
