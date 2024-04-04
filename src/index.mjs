import async_impl from "./auto/async.mjs"
import sync_impl from "./auto/sync.mjs"

export function findNearestFile(file_name, dir_path) {
	return async_impl(file_name, dir_path)
}

export function findNearestFileSync(file_name, dir_path) {
	return sync_impl(file_name, dir_path)
}
