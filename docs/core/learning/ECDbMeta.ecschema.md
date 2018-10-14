---
Schema: ECDbMeta
This file was automatically generated via ecjson2md. Do not edit this file. Any edits made to this file will be overwritten the next time it is generated
---

# ECDbMeta ECSchema

## Classes

### ClassHasAllBaseClasses

Relates a given ECClassId (Source) to all its base classes (recursively) (Target). For optimization reasons this ECRelationshipClass also holds a row for each ECClass that points to itself. Base class id order: class itself, then base classes in breadth first manner.

**Class Type:** RelationshipClass

**Relationship Class:**

|          |    ConstraintClasses    |            Multiplicity            |
|:---------|:------------------------|:-----------------------------------|
|**Source**|ECClassDef|(0..*)|
|**Target**|ECClassDef|(0..*)|

### ClassHasBaseClasses

**Class Type:** RelationshipClass

**Relationship Class:**

|          |    ConstraintClasses    |            Multiplicity            |
|:---------|:------------------------|:-----------------------------------|
|**Source**|ECClassDef|(0..*)|
|**Target**|ECClassDef|(0..*)|

**Class Properties:**

|    Name    |    Description    |    Type    |      Extended Type     |
|:-----------|:------------------|:-----------|:-----------------------|
|Ordinal||int||

### ClassOwnsLocalProperties

**Class Type:** RelationshipClass

**Relationship Class:**

|          |    ConstraintClasses    |            Multiplicity            |
|:---------|:------------------------|:-----------------------------------|
|**Source**|ECClassDef|(1..1)|
|**Target**|ECPropertyDef|(0..*)|

### ECClassDef

ECClass

**Class Type:** EntityClass

**Class Properties:**

|    Name    |    Description    |    Type    |      Extended Type     |
|:-----------|:------------------|:-----------|:-----------------------|
|Schema||||
|Name||string||
|DisplayLabel||string||
|Description||string||
|Type||ECClassType||
|Modifier||ECClassModifier||
|CustomAttributeContainerType|ECClassType::CustomAttribute: Specifies on which containers the custom attribute ECClass can be applied to.|ECCustomAttributeContainerType||
|RelationshipStrength|Applies to ECClassType::Relationship only.|ECRelationshipStrength||
|RelationshipStrengthDirection|Applies to ECClassType::Relationship only.|ECRelationshipDirection||

### ECEnumerationDef

ECEnumeration

**Class Type:** EntityClass

**Class Properties:**

|    Name    |    Description    |    Type    |      Extended Type     |
|:-----------|:------------------|:-----------|:-----------------------|
|Schema||||
|Name||string||
|DisplayLabel||string||
|Description||string||
|Type||PrimitiveType||
|IsStrict||boolean||
|EnumValues||||
|            |                   |            |                        |

### ECEnumeratorDef

**Class Type:** StructClass

**Class Properties:**

|    Name    |    Description    |    Type    |      Extended Type     |
|:-----------|:------------------|:-----------|:-----------------------|
|IntValue||int||
|StringValue||string||
|DisplayLabel||string||
|            |                   |            |                        |

### ECPropertyDef

ECProperty

**Class Type:** EntityClass

**Class Properties:**

|    Name    |    Description    |    Type    |      Extended Type     |
|:-----------|:------------------|:-----------|:-----------------------|
|Class||||
|Name||string||
|DisplayLabel||string||
|Description||string||
|IsReadonly||boolean||
|Priority||int||
|Ordinal|Position of the ECProperty in its ECClass|int||
|Kind||ECPropertyKind||
|PrimitiveType|ECPropertyKind::Primitive: data type. ECPropertyKind::PrimitiveArray: data type of array elements.|PrimitiveType||
|PrimitiveTypeMinLength|Minimum length of strings or blobs.|int||
|PrimitiveTypeMaxLength|Maximum length of strings or blobs.|int||
|PrimitiveTypeMinValue|Minimum value of numeric primitives.|double||
|PrimitiveTypeMaxValue|Maximum value of numeric primitives.|double||
|Enumeration|ECPropertyKind::Primitive: Id of this property's ECEnumerationDef.|||
|ExtendedTypeName|ECPropertyKind::Primitive or ECPropertyKind::PrimitiveArray: Extended type name further describing PrimitiveType.|string||
|StructClass|ECPropertyKind::Struct: ECClassId of property's struct type. ECPropertyKind::StructArray: ECClassId of array element struct type.|||
|KindOfQuantity|ECPropertyKind::Primitive or ECPropertyKind::PrimitiveArray: Id of this property's KindOfQuantityDef.|||
|Category|Id of this property's PropertyCategoryDef.|||
|ArrayMinOccurs|ECPropertyKind::PrimitiveArray or ECPropertyKind::StructArray|int||
|ArrayMaxOccurs|ECPropertyKind::PrimitiveArray or ECPropertyKind::StructArray|int||
|NavigationRelationshipClass|ECPropertyKind::Navigation: ECClassId of property's relationship class.|||
|NavigationDirection|ECPropertyKind::Navigation: Direction to follow the relationship defined in NonPrimitiveTypeClassId.|ECRelationshipDirection||
|            |                   |            |                        |

### ECRelationshipConstraintDef

**Class Type:** EntityClass

**Class Properties:**

|    Name    |    Description    |    Type    |      Extended Type     |
|:-----------|:------------------|:-----------|:-----------------------|
|RelationshipClass||||
|RelationshipEnd||ECRelationshipEnd||
|MultiplicityLowerLimit||int||
|MultiplicityUpperLimit||int||
|IsPolymorphic||boolean||
|RoleLabel||string||
|AbstractConstraintClass|ECClassId of base class for constraint classes of this constraint|||
|            |                   |            |                        |

### ECSchemaDef

ECSchema

**Class Type:** EntityClass

**Class Properties:**

|    Name    |    Description    |    Type    |      Extended Type     |
|:-----------|:------------------|:-----------|:-----------------------|
|Name||string||
|DisplayLabel||string||
|Description||string||
|Alias||string||
|VersionMajor||int||
|VersionWrite||int||
|VersionMinor||int||
|            |                   |            |                        |

### KindOfQuantityDef

KindOfQuantity

**Class Type:** EntityClass

**Class Properties:**

|    Name    |    Description    |    Type    |      Extended Type     |
|:-----------|:------------------|:-----------|:-----------------------|
|Schema||||
|Name||string||
|DisplayLabel||string||
|Description||string||
|PersistenceUnit||string||
|RelativeError||double||
|PresentationUnits||||
|            |                   |            |                        |

### PropertyCategoryDef

PropertyCategory

**Class Type:** EntityClass

**Class Properties:**

|    Name    |    Description    |    Type    |      Extended Type     |
|:-----------|:------------------|:-----------|:-----------------------|
|Schema||||
|Name||string||
|DisplayLabel||string||
|Description||string||
|Priority||int||
|            |                   |            |                        |

### PropertyHasCategory

Relates the property to its PropertyCategory.

**Class Type:** RelationshipClass

**Relationship Class:**

|          |    ConstraintClasses    |            Multiplicity            |
|:---------|:------------------------|:-----------------------------------|
|**Source**|ECPropertyDef|(0..*)|
|**Target**|PropertyCategoryDef|(0..1)|
|          |                         |                                    |

### PropertyHasEnumeration

ECPropertyKind::Enumeration: relates the property to its ECEnumeration.

**Class Type:** RelationshipClass

**Relationship Class:**

|          |    ConstraintClasses    |            Multiplicity            |
|:---------|:------------------------|:-----------------------------------|
|**Source**|ECPropertyDef|(0..*)|
|**Target**|ECEnumerationDef|(0..1)|
|          |                         |                                    |

### PropertyHasKindOfQuantity

ECPropertyKind::Primitive or ECPropertyKind::PrimitiveArray: relates the property to its KindOfQuantity.

**Class Type:** RelationshipClass

**Relationship Class:**

|          |    ConstraintClasses    |            Multiplicity            |
|:---------|:------------------------|:-----------------------------------|
|**Source**|ECPropertyDef|(0..*)|
|**Target**|KindOfQuantityDef|(0..1)|
|          |                         |                                    |

### PropertyHasNavigationRelationshipClassId

ECPropertyKind::Navigation: relates the navigation property to its backing RelationshipECClass.

**Class Type:** RelationshipClass

**Relationship Class:**

|          |    ConstraintClasses    |            Multiplicity            |
|:---------|:------------------------|:-----------------------------------|
|**Source**|ECPropertyDef|(0..*)|
|**Target**|ECClassDef|(0..1)|
|          |                         |                                    |

### PropertyHasStructType

ECPropertyKind::Struct: relates the struct property to its struct ECClass. ECPropertyKind::StructArray: relates the struct array property to its array element type.

**Class Type:** RelationshipClass

**Relationship Class:**

|          |    ConstraintClasses    |            Multiplicity            |
|:---------|:------------------------|:-----------------------------------|
|**Source**|ECPropertyDef|(0..*)|
|**Target**|ECClassDef|(0..1)|
|          |                         |                                    |

### RelationshipConstraintHasAbstractConstraintClass

**Class Type:** RelationshipClass

**Relationship Class:**

|          |    ConstraintClasses    |            Multiplicity            |
|:---------|:------------------------|:-----------------------------------|
|**Source**|ECRelationshipConstraintDef|(0..*)|
|**Target**|ECClassDef|(0..1)|
|          |                         |                                    |

### RelationshipConstraintHasClasses

**Class Type:** RelationshipClass

**Relationship Class:**

|          |    ConstraintClasses    |            Multiplicity            |
|:---------|:------------------------|:-----------------------------------|
|**Source**|ECRelationshipConstraintDef|(0..*)|
|**Target**|ECClassDef|(0..*)|
|          |                         |                                    |

### RelationshipHasConstraints

**Class Type:** RelationshipClass

**Relationship Class:**

|          |    ConstraintClasses    |            Multiplicity            |
|:---------|:------------------------|:-----------------------------------|
|**Source**|ECClassDef|(1..1)|
|**Target**|ECRelationshipConstraintDef|(2..2)|
|          |                         |                                    |

### SchemaHasSchemaReferences

**Class Type:** RelationshipClass

**Relationship Class:**

|          |    ConstraintClasses    |            Multiplicity            |
|:---------|:------------------------|:-----------------------------------|
|**Source**|ECSchemaDef|(0..*)|
|**Target**|ECSchemaDef|(0..*)|
|          |                         |                                    |

### SchemaOwnsClasses

**Class Type:** RelationshipClass

**Relationship Class:**

|          |    ConstraintClasses    |            Multiplicity            |
|:---------|:------------------------|:-----------------------------------|
|**Source**|ECSchemaDef|(1..1)|
|**Target**|ECClassDef|(0..*)|
|          |                         |                                    |

### SchemaOwnsEnumerations

**Class Type:** RelationshipClass

**Relationship Class:**

|          |    ConstraintClasses    |            Multiplicity            |
|:---------|:------------------------|:-----------------------------------|
|**Source**|ECSchemaDef|(1..1)|
|**Target**|ECEnumerationDef|(0..*)|
|          |                         |                                    |

### SchemaOwnsKindOfQuantities

**Class Type:** RelationshipClass

**Relationship Class:**

|          |    ConstraintClasses    |            Multiplicity            |
|:---------|:------------------------|:-----------------------------------|
|**Source**|ECSchemaDef|(1..1)|
|**Target**|KindOfQuantityDef|(0..*)|
|          |                         |                                    |

### SchemaOwnsPropertyCategories

**Class Type:** RelationshipClass

**Relationship Class:**

|          |    ConstraintClasses    |            Multiplicity            |
|:---------|:------------------------|:-----------------------------------|
|**Source**|ECSchemaDef|(1..1)|
|**Target**|PropertyCategoryDef|(0..*)|
|          |                         |                                    |