module.exports = (sequelize, DataTypes) => {
    const Show = sequelize.define('Show', {
        title: DataTypes.STRING,
        watch_link: DataTypes.STRING,
        picture_link: DataTypes.STRING,
        provider: DataTypes.STRING,
    });
    return Show;
};
