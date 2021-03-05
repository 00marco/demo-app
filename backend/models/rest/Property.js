const property = (sequelize, DataTypes) => {
    const Property = sequelize.define(
        'property',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            street: {
                type: DataTypes.STRING,
            },
            city: {
                type: DataTypes.STRING
            },
            state: {
                type: DataTypes.STRING
            },
            zip: {
                type: DataTypes.STRING
            },
            rent: {
                type: DataTypes.FLOAT
            },
            
        },
        {
            timestamps: true,
            freezeTableName: true
        }
    );

    Property.sync();
    return property;
}

export default property;
