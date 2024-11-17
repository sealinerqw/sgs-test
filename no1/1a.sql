CREATE TABLE FieldContainer(
  id UNIQUEIDENTIFIER,
  number INT,
  type NVARCHAR(MAX),
  length INT,
  width INT,
  height INT,
  weight INT,
  isEmpty BIT,
  receiptDate DATETIME,
  PRIMARY KEY (id)
);

CREATE TABLE FieldOperations(
  id UNIQUEIDENTIFIER,
  containerId UNIQUEIDENTIFIER,
  operationStart DATETIME,
  operationEnd DATETIME,
  operationType NVARCHAR(MAX),
  operatorName NVARCHAR(MAX),
  inspectionPlace NVARCHAR(MAX),
  PRIMARY KEY (id)
)