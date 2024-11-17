SELECT
    '[' + CHAR(13) + CHAR(10) +
    STRING_AGG(
        '  {' + CHAR(13) + CHAR(10) +
        '    "id": "' + CAST(id AS NVARCHAR(MAX)) + '",' + CHAR(13) + CHAR(10) +
        '    "number": ' + CAST(number AS NVARCHAR(MAX)) + ',' + CHAR(13) + CHAR(10) +
        '    "type": "' + CAST(type AS NVARCHAR(MAX)) + '",' + CHAR(13) + CHAR(10) +
        '    "length": ' + CAST(length AS NVARCHAR(MAX)) + ',' + CHAR(13) + CHAR(10) +
        '    "width": ' + CAST(width AS NVARCHAR(MAX)) + ',' + CHAR(13) + CHAR(10) +
        '    "height": ' + CAST(height AS NVARCHAR(MAX)) + ',' + CHAR(13) + CHAR(10) +
        '    "weight": ' + CAST(weight AS NVARCHAR(MAX)) + ',' + CHAR(13) + CHAR(10) +
        '    "isEmpty": ' + CAST(isEmpty AS NVARCHAR(MAX)) + ',' + CHAR(13) + CHAR(10) +
        '    "receiptDate": "' + CAST(receiptDate AS NVARCHAR(MAX)) + '"' + CHAR(13) + CHAR(10) +
        '  }',
        ',' + CHAR(13) + CHAR(10)
    ) +
    ']' 
AS result
FROM FieldContainer;