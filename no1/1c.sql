DECLARE @containerId UNIQUEIDENTIFIER = '11111111-1111-1111-1111-111111111111'

SELECT
    '[' + CHAR(13) + CHAR(10) +
    STRING_AGG(
        '  {' + CHAR(13) + CHAR(10) +
        '    "containerId": "' + CAST(containerId AS NVARCHAR(MAX)) + '",' + CHAR(13) + CHAR(10) +
        '    "operationStart": ' + CAST(operationStart AS NVARCHAR(MAX)) + ',' + CHAR(13) + CHAR(10) +
        '    "operationEnd": "' + CAST(operationEnd AS NVARCHAR(MAX)) + '",' + CHAR(13) + CHAR(10) +
        '    "operationType": "' + CAST(operationType AS NVARCHAR(MAX)) + '",' + CHAR(13) + CHAR(10) +
        '    "operatorName": "' + CAST(operatorName AS NVARCHAR(MAX)) + '",' + CHAR(13) + CHAR(10) +
        '    "inspectionPlace": "' + CAST(inspectionPlace AS NVARCHAR(MAX)) + '"' + CHAR(13) + CHAR(10) +
        '  }',
        ',' + CHAR(13) + CHAR(10)
    ) +
    CHAR(10) + ']'
FROM FieldOperations
WHERE containerId = @containerId;