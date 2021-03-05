const user = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            firstName: {
                type: DataTypes.STRING,
                unique: true
            },
            lastName: {
                type: DataTypes.STRING
            }
            
        },
        {
            timestamps: true,
            freezeTableName: true
        }
    );

    User.sync();
    return User;
}

export default user;
