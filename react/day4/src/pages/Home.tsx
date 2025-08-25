import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { addProduct, deleteProduct, updateProduct } from "@/utils/api"

interface IRating {
    rate: number
    count: number
}

interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: IRating
}

export default function Home() {
    const [page, setPage] = useState(1)
    const [editProduct, setEditProduct] = useState<IProduct | null>(null)
    const [newProduct, setNewProduct] = useState<IProduct | null>(null)
    const [editDialogOpen, setEditDialogOpen] = useState(false)
    const [addDialogOpen, setAddDialogOpen] = useState(false)
    const [search, setSearch] = useState("")
    const limit = 5
    const queryClient = useQueryClient()

    // Fetch products
    const { data, isLoading, isError, error } = useQuery<IProduct[]>({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await axios.get<IProduct[]>("https://fakestoreapi.com/products")
            return res.data
        },
    })

    // Edit mutation (optimistic)
    const editMutation = useMutation({
        mutationFn: updateProduct,
        onMutate: (updatedProduct) => {
            queryClient.setQueryData<IProduct[]>(["products"], (oldData) =>
                oldData?.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
            )
        },
    })

    // Delete mutation (optimistic)
    const deleteMutation = useMutation({
        mutationFn: deleteProduct,
        onMutate: (id) => {
            queryClient.setQueryData<IProduct[]>(["products"], (oldData) =>
                oldData?.filter((p) => p.id !== id)
            )
        },
    })

    // Add mutation (optimistic)
    const addMutation = useMutation({
        mutationFn: addProduct,
        onMutate: (product) => {
            queryClient.setQueryData<IProduct[]>(["products"], (oldData) => [
                ...(oldData || []),
                { ...product, id: Date.now(), rating: { rate: 0, count: 0 } },
            ])
        },
    })

    if (isLoading) {
        return (
            <div className="p-6">
                <Skeleton className="h-8 w-1/2 mb-4" />
                {Array.from({ length: limit }).map((_, idx) => (
                    <Skeleton key={idx} className="h-12 w-full mb-2" />
                ))}
            </div>
        )
    }

    if (isError) {
        return (
            <div className="p-6">
                <Alert variant="destructive">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-2" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{(error as Error).message}</AlertDescription>
                </Alert>
            </div>
        )
    }

    // Filter products by search
    const filteredData = data?.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    )

    const totalPages = filteredData ? Math.ceil(filteredData.length / limit) : 1
    const startIndex = (page - 1) * limit
    const paginatedData = filteredData?.slice(startIndex, startIndex + limit)

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex justify-between mb-4">
                <Input
                    placeholder="Search by title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="max-w-xs"
                />

                {/* Add Product Dialog */}
                <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
                    <DialogTrigger asChild>
                        <Button
                            onClick={() => {
                                setNewProduct({
                                    id: 0,
                                    title: "",
                                    category: "",
                                    price: 0,
                                    description: "",
                                    image: "",
                                    rating: { rate: 0, count: 0 },
                                })
                                setAddDialogOpen(true)
                            }}
                        >
                            Add Product
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-lg">
                        <DialogHeader>
                            <DialogTitle>Add Product</DialogTitle>
                            <DialogDescription>
                                Fill in the product details below
                            </DialogDescription>
                        </DialogHeader>

                        {newProduct && (
                            <div className="grid gap-4 py-4">
                                <div>
                                    <Label>Title</Label>
                                    <Input
                                        value={newProduct.title}
                                        onChange={(e) =>
                                            setNewProduct({ ...newProduct, title: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <Label>Category</Label>
                                    <Input
                                        value={newProduct.category}
                                        onChange={(e) =>
                                            setNewProduct({ ...newProduct, category: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <Label>Price</Label>
                                    <Input
                                        type="number"
                                        value={newProduct.price}
                                        onChange={(e) =>
                                            setNewProduct({ ...newProduct, price: Number(e.target.value) })
                                        }
                                    />
                                </div>
                                <div>
                                    <Label>Description</Label>
                                    <Input
                                        value={newProduct.description}
                                        onChange={(e) =>
                                            setNewProduct({ ...newProduct, description: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <Label>Image URL</Label>
                                    <Input
                                        value={newProduct.image}
                                        onChange={(e) =>
                                            setNewProduct({ ...newProduct, image: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                        )}

                        <DialogFooter className="flex justify-end gap-2">
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setNewProduct(null)
                                    setAddDialogOpen(false)
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={() => {
                                    if (newProduct) addMutation.mutate(newProduct)
                                    setNewProduct(null)
                                    setAddDialogOpen(false)
                                }}
                            >
                                Add
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Products Table */}
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-16">Image</TableHead>
                        <TableHead className="w-64">Title</TableHead>
                        <TableHead className="w-40">Category</TableHead>
                        <TableHead className="w-24">Price</TableHead>
                        <TableHead className="w-32">Rating</TableHead>
                        <TableHead className="w-32">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {paginatedData?.map((product) => (
                        <TableRow key={product.id} className="hover:bg-gray-50">
                            <TableCell className="w-16">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-12 w-12 object-contain rounded"
                                />
                            </TableCell>
                            <TableCell className="w-64">
                                {product.title.length > 30
                                    ? product.title.slice(0, 30) + "..."
                                    : product.title}
                            </TableCell>
                            <TableCell className="w-40">{product.category}</TableCell>
                            <TableCell className="w-24">${product.price}</TableCell>
                            <TableCell className="w-32">
                                {product.rating.rate} ⭐ ({product.rating.count})
                            </TableCell>
                            <TableCell className="w-32 flex gap-2">
                                {/* Edit Product Dialog */}
                                <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
                                    <DialogTrigger asChild>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => {
                                                setEditProduct(product)
                                                setEditDialogOpen(true)
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </DialogTrigger>

                                    <DialogContent className="sm:max-w-lg">
                                        <DialogHeader>
                                            <DialogTitle>Edit Product</DialogTitle>
                                            <DialogDescription>
                                                Update the product details below
                                            </DialogDescription>
                                        </DialogHeader>

                                        {editProduct && (
                                            <div className="grid gap-4 py-4">
                                                <div>
                                                    <Label>Title</Label>
                                                    <Input
                                                        value={editProduct.title}
                                                        onChange={(e) =>
                                                            setEditProduct({
                                                                ...editProduct,
                                                                title: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div>
                                                    <Label>Category</Label>
                                                    <Input
                                                        value={editProduct.category}
                                                        onChange={(e) =>
                                                            setEditProduct({
                                                                ...editProduct,
                                                                category: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div>
                                                    <Label>Price</Label>
                                                    <Input
                                                        type="number"
                                                        value={editProduct.price}
                                                        onChange={(e) =>
                                                            setEditProduct({
                                                                ...editProduct,
                                                                price: Number(e.target.value),
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div>
                                                    <Label>Description</Label>
                                                    <Input
                                                        value={editProduct.description}
                                                        onChange={(e) =>
                                                            setEditProduct({
                                                                ...editProduct,
                                                                description: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div>
                                                    <Label>Image URL</Label>
                                                    <Input
                                                        value={editProduct.image}
                                                        onChange={(e) =>
                                                            setEditProduct({
                                                                ...editProduct,
                                                                image: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        <DialogFooter className="flex justify-end gap-2">
                                            <Button
                                                variant="outline"
                                                onClick={() => {
                                                    setEditProduct(null)
                                                    setEditDialogOpen(false)
                                                }}
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    if (editProduct) editMutation.mutate(editProduct)
                                                    setEditProduct(null)
                                                    setEditDialogOpen(false)
                                                }}
                                            >
                                                Save
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                                <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() => deleteMutation.mutate(product.id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (page > 1) setPage(page - 1)
                                }}
                            />
                        </PaginationItem>

                        {Array.from({ length: totalPages }, (_, idx) => (
                            <PaginationItem key={idx}>
                                <PaginationLink
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setPage(idx + 1)
                                    }}
                                    className={page === idx + 1 ? "bg-blue-500 text-white" : ""}
                                >
                                    {idx + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

                        {totalPages > 5 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}

                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (page < totalPages) setPage(page + 1)
                                }}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}
