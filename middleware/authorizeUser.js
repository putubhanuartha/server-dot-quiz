export default (req, res, next) => {
	const { role } = res.locals.data;
	if (!role) return res.sendStatus(401);
	if (role !== "user") return res.sendStatus(403);
	next();
};
